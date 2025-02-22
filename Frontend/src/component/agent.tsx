import {Menu} from "./menu.tsx";

export const Agent = ({agentDpt ,place,key,handleAdd,handleShiftNuit,handleShiftJour,handleShiftAgent}) => {
    const onVisble = (e) =>{
        const id = e.target.id
        const menu = document.querySelectorAll(".d-menu")
        menu[id].classList.toggle('d-menu-visible')
       // menu.classList.toggle('d-menu-visible')
    }
    return (
        <div className={"d-agent"} onClick={onVisble} id={place} key={key}>
            <div className={"d-round"} id={place}>

            </div>
            <div className={"agent-info"} id={place}>
                <h3 id={place}>{agentDpt.Prenom} {agentDpt.PostNom}</h3>
                <div className={"d-span"} id={place}>
                    <p id={place} onClick={onVisble}><span id={place} onClick={onVisble}>{agentDpt.Matricule}</span></p>
                </div>
            </div>
            <Menu onDefineShiftJour={handleShiftJour} onHandleAdd={handleAdd}
                  onDefineShiftNuit={handleShiftNuit} idAgent={agentDpt.id} onShiftAgent={handleShiftAgent}/>
        </div>
    );
};
