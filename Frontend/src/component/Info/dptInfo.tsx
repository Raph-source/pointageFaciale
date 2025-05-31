import {UseTools} from "../../hook/useTools.ts";

export const DptInfo = ({agent,rapport}) => {
    const {setUcFirst, getMonthName} = UseTools()
    const presenceMois = rapport && rapport.length
    const absenceMois = rapport && 26 - rapport.length == 26 ? 0 : rapport && 26-rapport.length
    const moisCouranant = getMonthName()
    return (
        <div className={"d-another-info"}>
            <p>Département <span>{agent && setUcFirst(agent.departement.Nom)}</span></p>
            <p>Niveau d'emploi <span>{agent && setUcFirst(agent.titre.Intitule)}</span></p>
            <p>Absence du mois de {moisCouranant} <span>{absenceMois}/26 </span></p>
            <p>Presence du mois de {moisCouranant}  <span>{presenceMois}/26 </span></p>
        </div>
    );
};
