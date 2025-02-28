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

    const carroussell  = (e) =>{
        const id = e.target.id
        const idToScroll = id == 0 ? 0 :  -12 * id
        const deptDiv = document.querySelector('.d-scroll')
        deptDiv.style.transform = `translateY(${idToScroll}em)`
    }

    return {addClass,removeClass,idAgentActive,carroussell}
}