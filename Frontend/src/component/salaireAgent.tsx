import {useForm} from "react-hook-form";
import axios from "axios";
import {UseReload} from "../hook/useReload.ts";

export const SalaireAgent = ({handleRemove,agt}) => {
    const {register, handleSubmit} = useForm()
    const {reset} = UseReload()

    const onChange = async (data) =>{
        const Ndata = {...data, idDepartement : String(agt.id)}
        const response = await axios.get(`http://localhost:3000/rapport-pointage-departement/${Ndata.idDepartement}/${Ndata.mois}`)

    }

    return (
        <div className={"d-modal-agent-salaire"}>
            <div className={"d-head"}>
                <h3>Rapport pointage</h3>
                <div className={"close"} onClick={handleRemove}>

                </div>
            </div>
            <div className={"d-month"}>
                <select {...register('mois', {required: true})} onChange={handleSubmit(onChange)}>
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
            <div className={"d-body"}>
                <div className={"d-head-table"}>
                    <div className={'th'}>
                        <span>Total Heure salaire</span>
                    </div>
                    <div className={'th'}>
                        <span>Salaire mensuel</span>
                    </div>
                </div>
                <div className={"d-body-table"}>
                    <div className={'td'}>
                        <span>20KL224</span>
                    </div>
                    <div className={'td'}>
                        <span>Kipata mulubwe elie</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
