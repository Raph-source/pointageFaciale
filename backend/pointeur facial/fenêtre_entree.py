import tkinter as tk
from tkinter import messagebox
from tkinter import ttk
import subprocess
import sys

def executer_script(script_name):
    try:
        subprocess.run([sys.executable, script_name], check=True)
        messagebox.showinfo("Succès", f"{script_name} a été exécuté avec succès.")
    except subprocess.CalledProcessError as e:
        messagebox.showerror("Erreur", f"Une erreur s'est produite lors de l'exécution de {script_name}.\n\n{e}")

def actualiser_donnees():
    executer_script("extracteur_caracteristique.py")

def lancer_pointeur():
    executer_script("pointeur_entree.py")

def quitter_application():
    if messagebox.askyesno("Quitter", "Voulez-vous vraiment quitter ?"):
        root.destroy()

# Création de la fenêtre principale
root = tk.Tk()
root.title("Gestion du Pointeur Faciale")
root.geometry("500x300")
root.configure(bg="#f7f9fc")

# Définir le style des boutons
style = ttk.Style()
style.configure("TButton",
                font=("Arial", 12, "bold"),
                padding=10,
                background="#4CAF50",
                foreground="black")
style.map("TButton",
          background=[("active", "#45a049")],
          foreground=[("active", "white")])

# Titre principal
title = tk.Label(root, text="Gestion du Pointeur Faciale", font=("Helvetica", 18, "bold"), bg="#f7f9fc", fg="#333")
title.pack(pady=20)

# Ajout de boutons
btn_actualiser = ttk.Button(root, text="Actualiser les données", command=actualiser_donnees)
btn_actualiser.pack(pady=10)

btn_pointeur = ttk.Button(root, text="Lancer le pointeur", command=lancer_pointeur)
btn_pointeur.pack(pady=10)

btn_quitter = ttk.Button(root, text="Quitter", command=quitter_application)
btn_quitter.pack(pady=10)

# Pied de page
footer = tk.Label(root, text="© 2025 Gestion du Pointeur Faciale", font=("Arial", 10), bg="#f7f9fc", fg="#777")
footer.pack(side=tk.BOTTOM, pady=10)

# Boucle principale de l'application
root.mainloop()
