import {useState} from "react";

export const DptInformation = ({handleRemove,agentDpt,dptactive,handleGetRapport}) => {
    const [agentPresent, setAgentPresent] = useState([])
    const [agentAbsent, setAgentAbsent] = useState(0)

    const agentActive = agentDpt.length > 0 ? agentDpt : []
    const sendData = async (data) =>{
        const response = await handleGetRapport(data)
        const rapport = response.data.rapport
        const date = new Date()
        const moisTest = date.getDate()+""+date.getMonth()+date.getFullYear()

        const agentPresent = await Promise.all(rapport.map(async (rp) => {

            const dateRp = new Date(rp.HeureArrivee)
            const rpDateTest = dateRp.getDate()+""+dateRp.getMonth()+dateRp.getFullYear()
            console.log(rpDateTest)
            if (rpDateTest === moisTest) {
                return rp;
            }
            return null;
        })).then(results => results.filter(rp => rp !== null));  // filtre les valeurs nulles

        const agentAbsent = agentActive.length - agentPresent
        setAgentAbsent(agentAbsent)
        setAgentPresent(agentPresent)
        /*
        const rapportAgent = response.data.rapport.length
        const agentPresent = agentActive.length - rapportAgent
        setAgentPresent(agentPresent)*/
    }

    if (dptactive){
        const data = dptactive && { mois : String(new  Date().getMonth() + 1 ), idDepartement : dptactive.id}
        sendData(data)
    }

    return (
        <div className={'d-modal-info-dpt'}>
            <div className={"d-head"}>
                <h3>Information du departement</h3>
                <div className={"close"} onClick={handleRemove}>
                </div>
            </div>
            <div className={"d-info"}>
                <p><span>Nombre total des agents  </span> <span>{agentActive.length}</span></p>
                <p><span>Nombre agents presents  </span> <span>{agentPresent.length}</span></p>
                <p><span>Nombre agents absents  </span> <span>{agentAbsent}</span></p>
            </div>
        </div>
    );
};
