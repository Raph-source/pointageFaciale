from deepface import DeepFace
import os
from tqdm import tqdm
import cv2
import matplotlib.pyplot as plt
import numpy as np

def rogner(dossier_entree, dossier_sortie, detector_backend="yolov8"):
    #créer le dossier de sortie si il n'existe pas
    os.makedirs(dossier_sortie, exist_ok=True)

    for image in tqdm(os.listdir(dossier_entree)):
        chemin_image = os.path.join(dossier_entree, image)
        nom_image = image.split(".")[0]

        face = DeepFace.extract_faces(
            chemin_image,
            detector_backend=detector_backend,
            enforce_detection=True,
            grayscale=True,
        )[0]["face"]

        # Assurez-vous que l'image est dans un format compatible
        if face.dtype != np.uint8:
            face = (255 * face).astype(np.uint8)  # Normalisez et convertissez en uint8

        face = cv2.cvtColor(face, cv2.COLOR_GRAY2RGB)
        face = cv2.resize(face, (224, 224))
        plt.imsave(f"{dossier_sortie}/{nom_image}.jpg", face)

rogner("../uploads/", "./visage")