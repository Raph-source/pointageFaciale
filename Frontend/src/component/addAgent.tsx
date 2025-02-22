import {useForm} from "react-hook-form";
import axios from "axios";
import {UseReload} from "../hook/useReload.ts";

export const AddAgent = ({titre, handleRemove,dptActive}) => {
    const {register, handleSubmit} = useForm()
    const {reset} = UseReload()
    const onSubmit = async (data) =>{
        const Ndata = {...data, idDepartement : String(dptActive.id)}
        console.log(Ndata)

        try {
            const response = await  axios.post('http://localhost:3000/ajouter-agent',Ndata)
            alert(response.data.reponse)
            reset()
        }
        catch (e) {
            console.log(e)
            alert(e)
        }

    }
    return (
        <div className={"d-agent-add"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"d-agent-head"}>
                    <h3>Ajoute un agent</h3>
                    <div className={"close"} onClick={handleRemove}></div>
                </div>
                <div className={"d-agent-body"}>
                    <div className={"d-in-two"}>
                        <input type="text" placeholder={"Nom"} {...register("nom", {required: true})} />
                        <input type="text" placeholder={"Postnom"} {...register("postNom", {required: true})}/>
                    </div>
                    <div className={"d-in-two"}>
                        <input type="text" placeholder={"Prenom"} {...register("prenom", {required: true})}/>
                        <select {...register("idTitre", {required: true})}>
                            <option value="" disabled={true}>selectionner un titre</option>
                            {titre && titre.map((t) => <option value={t.id}>{t.Intitule}</option>)}
                        </select>
                    </div>
                    <div className={"d-file"}>
                        <input type="text" placeholder={"Telephone"} {...register("telephone", {required: true})}/>
                        <input type="file" {...register("photo", {required: true})}/>
                    </div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
};
