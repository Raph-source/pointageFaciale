import { useForm } from "react-hook-form";
import axios from "axios";
import { UseReload } from "../hook/useReload.ts";

export const AddAgent = ({ titre, handleRemove, dptActive }) => {
    const { register, handleSubmit } = useForm();
    const { reset } = UseReload();

    const onSubmit = async (data) => {
        if (!data.photo || data.photo.length === 0) {
            alert("Veuillez sélectionner une photo.");
            return;
        }

        // Création d'un FormData
        const formData = new FormData();
        formData.append("nom", data.nom);
        formData.append("postNom", data.postNom);
        formData.append("prenom", data.prenom);
        formData.append("telephone", data.telephone);
        formData.append("idTitre", data.idTitre);
        formData.append("idDepartement", String(dptActive.id));
        formData.append("photo", data.photo[0]); // On récupère le fichier

        try {
            const response = await axios.post("http://localhost:3000/ajouter-agent", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert(response.data.reponse);
            reset();
        } catch (e) {
            console.log(e);
            alert("Erreur lors de l'envoi des données.");
        }
    };

    return (
        <div className="d-agent-add">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-agent-head">
                    <h3>Ajoute un agent</h3>
                    <div className="close" onClick={handleRemove}></div>
                </div>
                <div className="d-agent-body">
                    <div className="d-in-two">
                        <input type="text" placeholder="Nom" {...register("nom", { required: true })} />
                        <input type="text" placeholder="Postnom" {...register("postNom", { required: true })} />
                    </div>
                    <div className="d-in-two">
                        <input type="text" placeholder="Prenom" {...register("prenom", { required: true })} />
                        <select {...register("idTitre", { required: true })}>
                            <option value="" disabled>
                                Sélectionner un titre
                            </option>
                            {titre && titre.map((t) => <option key={t.id} value={t.id}>{t.Intitule}</option>)}
                        </select>
                    </div>
                    <div className="d-file">
                        <input type="text" placeholder="Téléphone" {...register("telephone", { required: true })} />
                        <input type="file" {...register("photo", { required: true })} />
                    </div>
                    <input type="submit" value="Ajouter" />
                </div>
            </form>
        </div>
    );
};
