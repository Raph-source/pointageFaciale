import {useEffect, useState} from "react";
import axios from "axios";

export const UseSpecificAgent = () =>{
    const [agent,setAgent] = useState(null)
    const [rapport,setRapport] = useState(null)
    const [salaire,setSalaire] = useState(null)
    const [shitf,setShift] = useState(null)

    useEffect( () => {
        getSalaireAgentById()
        getRapportAgentById()
        getAgent()
        getShiftAgentById()
    },[])

    const getSalaireAgentById = async () =>{
        const idAgent = localStorage.getItem('idAgent')
        const mois =new Date().getMonth()
        const response = await axios.get(`http://localhost:3000/salaire-agent/${idAgent}/${mois}`)
        setSalaire(response.data)

    }
    const getRapportAgentById = async () =>{
        const idAgent = localStorage.getItem('idAgent')
        const mois = new Date().getMonth()
        const rapport = await axios.get(`http://localhost:3000/rapport-pointage-agent/${idAgent}/${mois}`)
        setRapport(rapport.data.rapport)
    }
    const getAgent = async () => {
        const id : string = localStorage.getItem('idAgent')
        const response = await axios.get(`http://localhost:3000/agent-information/${id}`)
        setAgent(response.data.agent)
    }
    const getShiftAgentById = async () =>{
        const idAgent = localStorage.getItem("idAgent")
        const response = await axios.get(`http://localhost:3000/shift-agent/${idAgent}`);
        setShift(response.data)
    }


    return {agent,rapport,salaire,shitf}
}