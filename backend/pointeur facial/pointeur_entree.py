from deepface import DeepFace
from deepface.modules.verification import find_distance
import cv2
import time
import sys
import pickle
import cvzone
import mysql.connector
from datetime import datetime

cap = cv2.VideoCapture(0)
start_time = time.time()
fps = 0
frame_count = 0
detected8faces = []
last_detection_time = 0

model_name = "Facenet512"
metrics = [{"cosine": 0.30}, {"euclidean": 20.0}, {"euclidean_l2": 0.78}]

fourcc = cv2.VideoWriter_fourcc(*"mp4v")
ret, frame = cap.read() 
frame_width = frame.shape[1]
frame_height = frame.shape[0]
out = cv2.VideoWriter("output.mp4", fourcc, 20.0, (frame_width, frame_height))

try:
    with open(f"./caracteristiques/caracteristiques.pkl", "rb") as file:
        embs = pickle.load(file)
        print(type(embs))  # Vérifiez le type
        print(embs)
        print("ouverture fichier pkl success")
except FileNotFoundError:
    print("echec de l'ouverture du fichier pkl")
    sys.exit(0)

# Configuration de la base de données
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "pointage"
}

# Fonction pour se connecter à la base de données
def connect_db():
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except mysql.connector.Error as err:
        print(f"Erreur lors de la connexion à la base de données : {err}")
        return None

# Fonction pour insérer une présence
def enregistrer_presence(matricule):
    connection = connect_db()
    if connection is None:
        return

    try:
        cursor = connection.cursor(dictionary=True)

        # Vérifier si le matricule existe dans la table agent
        cursor.execute("SELECT id FROM agent WHERE matricule = %s", (matricule,))
        agent = cursor.fetchone()

        if agent is None:
            print(f"Aucun agent trouvé avec le matricule {matricule}")
            return

        id_agent = agent["id"]
        date_actuelle = datetime.now().date()
        heure_actuelle = datetime.now()

        # Vérifier si l'agent a déjà pointé aujourd'hui
        cursor.execute(
            """
            SELECT * FROM presence 
            WHERE idAgent = %s AND date = %s
            """,
            (id_agent, date_actuelle)
        )
        presence = cursor.fetchone()

        if presence:
            print(f"L'agent {matricule} a déjà pointé aujourd'hui.")
        else:
            # Insérer une nouvelle présence
            cursor.execute(
                """
                INSERT INTO presence (idAgent, date, heureArrivee)
                VALUES (%s, %s, %s)
                """,
                (id_agent, date_actuelle, heure_actuelle)
            )
            connection.commit()
            print(f"Pointage effectué pour l'agent {matricule} à {heure_actuelle}.")
    except mysql.connector.Error as err:
        print(f"Erreur lors de l'enregistrement de la présence : {err}")
    finally:
        connection.close()

def calculate_fps(start_time):
    current_time = time.time()
    fps = 1.0 / (current_time - start_time)
    start_time = current_time
    return fps, start_time

def normalisation(image):
    clashe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    return clashe.apply(image)

while True:
    new_frame_time = time.time()
    ret, frame = cap.read()

    if not ret:
        print("erreor frame")

    fps, startTime = calculate_fps(start_time)

    if frame_count % 5 == 0:
        detected_faces = []
        results = DeepFace.extract_faces(
            frame,
            detector_backend="yolov8",
            enforce_detection=False
        )

        for result in results:
            if result ["confidence"] >= 0.5:
                x = result["facial_area"]["x"]
                y = result["facial_area"]["y"]
                w = result["facial_area"]["w"]
                h = result["facial_area"]["h"]

                x1 = x
                y1 = y
                x2 = x + w
                y2 = x + h

                cropped_face = frame[y : y + h, x: x + w]
                cropped_face_resized = cv2.resize(cropped_face, (224, 224))
                cropped_face_gray = cv2.cvtColor(cropped_face_resized, cv2.COLOR_BGR2GRAY)
                cropped_face_norm = normalisation(cropped_face_gray)
                cropped_face_gray = cv2.cvtColor(cropped_face_norm, cv2.COLOR_GRAY2RGB)

                emb = DeepFace.represent(
                    cropped_face_gray,
                    model_name=model_name,
                    enforce_detection=False,
                    detector_backend="skip"
                )[0]["embedding"]

                min_dist = float("inf")
                matricule = None

                for name, emb2 in embs.items():
                    dst = find_distance(emb, emb2, list(metrics[2].keys())[0])
                    if dst < min_dist:
                        min_dist = dst
                        matricule = name
                
                if min_dist < list(metrics[2].values())[0]:
                    detected_faces.append(
                        (x1, y1, x2, y2, matricule, min_dist, (0, 255, 0))
                    )
                    print(f"detected as : {matricule} {min_dist:.2f}")

                    # Enregistrer le pointage dans la base de données
                    enregistrer_presence(matricule)

                else:
                    detected_faces.append(
                        (x1, y1, x2, y2, "INCONNU", min_dist, (0, 0, 255))
                    )
        last_detection_time = frame_count
    
    for x1, y1, x2, y2, name, min_dist, color in detected_faces:
        cv2.rectangle(frame, (x1, y1), (x2, y2), color, 1)
        cvzone.putTextRect(
            frame, 
            f"{name} {min_dist:.2f}",
            (x1 + 10, y1 - 12),
            scale=1.5,
            thickness=2,
            colorR=color,
        )

    cv2.imshow("frame", frame)
    out.write(frame)

    frame_count += 1

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
out.release()
cv2.destroyAllWindows()