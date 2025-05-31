import {Menu} from "./menu.tsx";
import {UseTools} from "../hook/useTools.ts";

export const Agent = ({agentDpt ,place,key,handleAdd,handleSalAdd,handleShiftNuit,handleShiftJour,handleShiftAgent,handleDelete}) => {
    const onVisble = (e) =>{
        const id = e.target.id
        const menu = document.querySelectorAll(".d-menu")
        menu[id].classList.toggle('d-menu-visible')
       // menu.classList.toggle('d-menu-visible')
    }
    const {setUcFirst} = UseTools()
    return (
        <div className={"d-agent"} onClick={onVisble} id={place} key={key}>
            <div className={"d-round"} id={place}>

            </div>
            <div className={"agent-info"} id={place}>
                <h3 id={place}>{  setUcFirst(agentDpt.Prenom) } {agentDpt.PostNom}</h3>
                <div className={"d-span"} id={place}>
                    <p id={place} onClick={onVisble}><span id={place} onClick={onVisble}>{agentDpt.Matricule}</span></p>
                </div>
            </div>
            <Menu onDefineShiftJour={handleShiftJour} onHandleAdd={handleAdd} onSalaireAdd={handleSalAdd}
                  onDefineShiftNuit={handleShiftNuit} idAgent={agentDpt.id} onShiftAgent={handleShiftAgent}
                onDeleteAgent={handleDelete}/>
        </div>
    );
};
