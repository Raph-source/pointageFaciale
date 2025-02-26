import {useState} from "react";

export const UseModal =  (classe) =>{
    const [idAgentActive, setIdAgentActive] = useState(null)

    const addClass = (e) =>{
        const id = e.target.id
        setIdAgentActive(id)
        document.body.classList.add(classe)
    }
    const removeClass = () =>{
        document.body.classList.remove(classe)
    }

    return {addClass,removeClass,idAgentActive}
}