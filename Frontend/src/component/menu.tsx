export const Menu = ({onDefineShiftJour,onHandleAdd,onSalaireAdd,onDefineShiftNuit,idAgent,onShiftAgent}) => {
    return (
        <div className={"d-menu"}>
            <div className={"d-option"} id={idAgent} onClick={onShiftAgent}><span id={idAgent}> Shift jour/Nuit</span></div>
            <div className={"d-option"} onClick={onDefineShiftJour} id={idAgent}><span id={idAgent} onClick={onDefineShiftJour}>Definir le shift pour le jour</span></div>
            <div className={"d-option"} onClick={onDefineShiftNuit} id={idAgent}><span id={idAgent} onClick={onDefineShiftNuit}>Definir le shift pour la nuit</span></div>
            <div className={"d-option"} id={idAgent}><span id={idAgent} onClick={onHandleAdd} >Rapport du mois</span></div>
            <div className={"d-option"} id={idAgent}><span id={idAgent} onClick={onSalaireAdd}>Salaire agent</span></div>
        </div>
    );
};
