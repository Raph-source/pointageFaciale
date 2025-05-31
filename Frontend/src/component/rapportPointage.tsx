import {useForm} from "react-hook-form";
import axios from "axios";
import {UseReload} from "../hook/useReload.ts";
import {useState} from "react";

export const RapportPointage = ({handleRemove, dpt, handllGetReport}) => {
    const {register} = useForm()
    const {reset} = UseReload()
    const [rapport, setRapport] = useState(null)

    const onChange = async (e) => {
        const Ndata = {mois: e.target.value, idDepartement: String(dpt.id)}
        console.log(e.target.value)
        const response = await  handllGetReport(Ndata)//axios.get(`http://localhost:3000/rapport-pointage-departement/${Ndata.idDepartement}/${Ndata.mois}`)
        reset()
        setRapport(response.data.rapport)
        console.log(response)
    }

    return (
        <div className={"d-modal-rapport"}>
            <div className={"d-head"}>
                <h3>Rapport du mois</h3>
                <div className={"close"} onClick={handleRemove}>
                </div>
            </div>
            <div className={"d-month"}>
                <select {...register('mois', {required: true})} onChange={onChange}>
                    <option value="" disabled={true}>Selectionner un mois</option>
                    <option value="1">Janvier</option>
                    <option value="2">Fevrier</option>
                    <option value="3">Mars</option>
                    <option value="4">Avril</option>
                    <option value="5">Mai</option>
                    <option value="6">Juin</option>
                    <option value="7">Juillet</option>
                    <option value="8">Aout</option>
                    <option value="9">Septembte</option>
                    <option value="10">Octobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Decembre</option>
                </select>
            </div>
            {rapport ? rapport.length > 0 ? <div className={"d-body"}>
                <div className={"d-head-table"}>
                    <div className={'th'}>
                        <span>Matricule</span>
                    </div>
                    <div className={'th'}>
                        <span>Nom complet</span>
                    </div>
                    <div className={'th'}>
                        <span>Heure d'arrivée</span>
                    </div>
                    <div className={'th'}>
                        <span>Heure de sortie</span>
                    </div>
                </div>
                {rapport.map((rp, index) => <div className={"d-body-table"} key={index}>
                    <div className={'td'}>
                        <span>{rp.agent.Matricule}</span>
                    </div>
                    <div className={'td'}>
                        <span>{rp.agent.Nom} {rp.agent.PostNom} {rp.agent.Prenom}</span>
                    </div>
                    <div className={'th'}>
                        <span>{rp.HeureArrivee}</span>
                    </div>
                    <div className={'th'}>
                        <span>{rp.HeureSortie}</span>
                    </div>
                </div>)}

            </div> : <h4>Aucun rapport pour ce mois</h4> : <h4>Selectionnez le mois</h4>}
        </div>
    );
};

