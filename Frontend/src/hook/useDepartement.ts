import {useEffect, useState} from "react";
import axios from "axios";

export const UseDepartement = () =>{
    const [departement, setDepartement] = useState([])
    const [titre, setTitre] = useState(null)
    const [agentDptActive, setAgentDptActive] = useState([])
    const [shiftAgent, setShiftAgant] = useState([])
    const [dptActive, setDptActive] = useState(null)


    useEffect(() => {
        getDepartement()
    },[])

    const getDepartement =  async ()=>{
        const response = await axios.get("http://localhost:3000/departement-titre")
        setDepartement(response.data.departement)
        setTitre(response.data.titre)
    }
    const getdeptAgentDpt = async  (e) =>{
        const id = parseInt(e.target.id)
        const response = await axios.get(`http://localhost:3000/agent-departement/${id}`);
        const deptActive = departement.filter((dept) => dept.id === id)
        setDptActive(deptActive[0])
        setAgentDptActive(response.data.agents)
    }
    const definirShitfJour = async  (e) =>{
        try {
            const idAgent = parseInt(e.target.id)
            const response = await axios.put(`http://localhost:3000/shift-jour/${idAgent}`);
            alert(response.data.reponse)
        }
        catch (e) {
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
        e.stopPropagation()
        console.log(response)
    }
    const getRapportDpt = async (data) =>{
        const idDepartement = data.idDepartement
        const mois =data.mois
        const response = await axios.get(`http://localhost:3000/rapport-pointage-departement/${idDepartement}/${mois}`)
        return  response
    }

    const getRapportAgent = async (data) =>{
        const idAgent = data.idAgent
        const mois =data.mois
        const response = await axios.get(`http://localhost:3000/rapport-pointage-agent/${idAgent}/${mois}`)
        return  response
    }
    const getSalaire = async (data) =>{
        const idAgent = data.idAgent
        const mois =data.mois
        const response = await axios.get(`http://localhost:3000/salaire-agent/${idAgent}/${mois}`)
        return  response
    }
    const supprimerAgent = async  (e) =>{
        try {
            const idAgent = parseInt(e.target.id)
            console.log(idAgent)
            const response = await axios.get(`http://localhost:3000/agent-delete/${idAgent}`);
            alert("operation reussie !!")
        }catch (e) {
            alert(e.response.data.reponse)
        }
    }

    const close = (e) =>{
        const classRemove = e.target.id
        document.querySelector(`.${classRemove}`).classList.remove(classRemove)
    }

    return {departement,getdeptAgentDpt,agentDptActive,getSalaire,supprimerAgent,
        definirShitfNuit,definirShitfJour,shiftAgent,getShitAgent,close,dptActive,getRapportDpt,getRapportAgent
    ,titre}
}