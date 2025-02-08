from deepface import DeepFace
import os
from tqdm import tqdm
import cv2
import matplotlib.pyplot as plt
import numpy as np
import pickle

model_name = "Facenet512"

def normalisation(image):
    clashe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    return clashe.apply(image)

def extraire_caracteristique(dossier_entree, dossier_sortie, emb_file, norme_dir, model_name=model_name):
    os.makedirs(dossier_sortie, exist_ok=True)
    os.makedirs(norme_dir, exist_ok=True)

    try:
        with open(f"./{dossier_sortie}/{emb_file}", "rb") as fichier:
            caracteristiques = pickle.loads(fichier)
            print("caracteristique extrait avec succes")
            print(caracteristiques)
    except FileNotFoundError:
        caracteristiques = {}
        print("fichier embs non trouve")
    
    for image in tqdm(os.listdir(dossier_entree)):
        chemin_image = os.path.join(dossier_entree, image)
        nom_image = image.split(".")[0]

        if nom_image not in caracteristiques:
            face = cv2.imread(chemin_image, cv2.IMREAD_GRAYSCALE)

            face_norme = normalisation(face)

            # # Assurez-vous que l'image est dans un format compatible
            # if face.dtype != np.uint8:
            #     face = (255 * face).astype(np.uint8)  # Normalisez et convertissez en uint8

            face_norme = cv2.cvtColor(face_norme, cv2.COLOR_GRAY2BGR)

            plt.imsave(f"./{norme_dir}/{nom_image}.jpg", face_norme)

            caracteristique = DeepFace.represent(
                face_norme,
                model_name=model_name,
                enforce_detection=False,
                detector_backend="skip",
            )

            caracteristique = caracteristique[0]["embedding"]
            caracteristiques[nom_image] = caracteristique

    with open(f"./{dossier_sortie}/{emb_file}", "wb") as file:
        pickle.dump(emb_file, file)
        print("ok")
        print(caracteristiques.keys)

extraire_caracteristique("./visage", "./caracteriques", "caracteristiques", "./visage_normalise")