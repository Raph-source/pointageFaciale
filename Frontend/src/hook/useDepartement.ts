import {useEffect, useState} from "react";
import axios from "axios";

export const UseDepartement = () =>{
    const [departement, setDepartement] = useState([])
    const [agentDptActive, setAgentDptActive] = useState([])
    const [shiftAgent, setShiftAgant] = useState([])

    useEffect(() => {
        getDepartement()
    },[])

    const getDepartement =  async ()=>{
        const response = await axios.get("http://localhost:3000/departement-titre")
        setDepartement(response.data.departement)
    }
    const getdeptAgentDpt = async  (e) =>{
        const id = parseInt(e.target.id)
        const response = await axios.get(`http://localhost:3000/agent-departement/${id}`);
        setAgentDptActive(response.data.agents)
    }
    const definirShitfJour = async  (e) =>{
        try {
            const idAgent = parseInt(e.target.id)
            const response = await axios.put(`http://localhost:3000/shift-jour/${idAgent}`);
            alert(response.data.reponse)
        }catch (e) {
            alert(e.response.data.reponse)
        }

    }
    const definirShitfNuit = async  (e) =>{
        try {
            const idAgent = parseInt(e.target.id)
            const response = await axios.put(`http://localhost:3000/shift-nuit/${idAgent}`);
            alert(response.data.reponse)
        }catch (e) {
            alert(e.response.data.reponse)
        }
    }
    const getShitAgent = async  (e) =>{
        const idAgent = parseInt(e.target.id)
        const modal = document.querySelector('.d-shift-cont')
        modal.classList.toggle('d-shift-cont-visible')
        const response = await axios.get(`http://localhost:3000/shift-agent/${idAgent}`);
        console.log(response.data)
        setShiftAgant(response.data)
    }
    const close = (e) =>{
        const classRemove = e.target.id
        document.querySelector(`.${classRemove}`).classList.remove(classRemove)
    }

    return {departement,getdeptAgentDpt,agentDptActive,
        definirShitfNuit,definirShitfJour,shiftAgent,getShitAgent,close}
}