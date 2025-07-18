//inclusion des module
const express = require("express")
const multer = require('multer')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//inclusion des contrôlleurs
const Agent = require("../app/controllers/agent")

//pour le stockage des upload
const stockage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, './uploads/')
    },
    filename : async (req, file, cb) =>{
        let lasteId = await Agent.getLastId()

        let id = lasteId + 1
        
        const date = new Date()

        const annee = date.getFullYear();
        
        const { nom, postNom, prenom } = req.body;
        // Validation des données
        if (!nom || !postNom || !prenom) {
        return cb(new Error('Tous les champs (nom, postNom, prénom) sont obligatoires.'));
        }

        // Générer un nom basé sur les initiales et l'ID
        const initiales = `${annee}${nom.charAt(0).toUpperCase()}${postNom.charAt(0).toUpperCase()}${prenom.charAt(0).toUpperCase()}`;
        const extension = path.extname(file.originalname);
        const fileName = `${initiales}${id}${extension}`;
        cb(null, fileName);
    }
})

const upload = multer({
    storage : stockage
})

const agent = express.Router()

// Middleware pour analyser les données POST
agent.use(bodyParser.urlencoded({ extended: true }));
agent.use(bodyParser.json());
agent.use(cors());


//LES ENDPOINTS

//POST
agent.post('/authentification', upload.none(), (req, res) =>{ Agent.authentification(req, res)})
agent.post('/ajouter-agent', upload.single('photo'), (req, res) => { Agent.ajouterAgent(req, res)})

//GET
agent.get('/departement-titre', (req, res) =>{ Agent.getAllDepartementAndTitre(res)})
agent.get('/agent-departement/:idDepartement', (req, res) =>{ Agent.getAgentDepartement(req, res)})
agent.put('/shift-jour/:idAgent', (req, res) =>{ Agent.setAgentJour(req, res)})
agent.put('/shift-nuit/:idAgent', (req, res) =>{ Agent.setAgentNuit(req, res)})
agent.get('/shift-agent/:idAgent', (req, res) =>{ Agent.checkShift(req, res)})
agent.get('/rapport-pointage-departement/:idDepartement/:mois', (req, res) =>{ Agent.getRapportPointageDepartement(req, res)})
agent.get('/rapport-pointage-agent/:idAgent/:mois', (req, res) =>{ Agent.getRapportPointageAgent(req, res)})
agent.get('/salaire-agent/:idAgent/:mois', (req, res) =>{ Agent.getSalaire(req, res)})
agent.get('/agent-information/:idAgent', (req,res) => { Agent.getAgentDptController(req,res) })
agent.get('/agent-delete/:idAgent', (req,res) => { Agent.supprimerAgentController(req,res) })



module.exports = agent;