import {UseTools} from "../../hook/useTools.ts";

export const DptInfo = ({agent,rapport}) => {
    const {setUcFirst} = UseTools()
    const presenceMois = rapport && rapport.length
    const absenceMois = rapport && 26 - rapport.length
    return (
        <div className={"d-another-info"}>
            <p>Département <span>{agent && setUcFirst(agent.departement.Nom)}</span></p>
            <p>Post occupé <span>{agent && setUcFirst(agent.titre.Intitule)}</span></p>
            <p>Absence/mois <span>{absenceMois}/26</span></p>
            <p>Presence/mois <span>{presenceMois}/26</span></p>
        </div>
    );
};
