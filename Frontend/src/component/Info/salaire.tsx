import {UseTools} from "../../hook/useTools.ts";

export const Salaire = ({salaire}) => {
    const {getMonthName} = UseTools()
    const monthNameNow = getMonthName()

    return (
        <div className={"d-another-info"}>
            <p>Salaire du mois de {monthNameNow} <span>{ salaire && Object.keys(salaire).length > 0 ? salaire.salaireMensuel : 0} $</span></p>
        </div>
    );
};
