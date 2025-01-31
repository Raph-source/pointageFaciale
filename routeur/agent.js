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
agent.get('/statistique/:idPromotion', (req, res) =>{ User.getStatistique(req, res)})

module.exports = agent;