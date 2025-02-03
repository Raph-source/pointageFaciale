const Agent_M = require('../models/agent')
const Titre = require('../models/titre')
const Departement = require('../models/departement')
const validator = require("validator")
const AgentMatin = require('../models/agentMatin')
const AgentSoiree = require('../models/agentSoiree')
const Presence = require('../models/presence')

class Agent{
    static async authentification(req, res){
        try{
            let {matricule, mdp} = req.body
                    
            if(typeof matricule !== 'undefined' && typeof mdp !== 'undefined'){
                if(matricule && mdp){
                    //bloquer les injections
                    matricule = validator.escape(matricule)
                    mdp = validator.escape(mdp)

                    let agent = await Agent_M.authentification(matricule, mdp)
                    
                    //vérifier l'authentification
                    if(agent){
                        let idTitre = agent.idTitre
                        let titre = await Titre.getTitre(idTitre)
                        
                        res.status(200).json({
                            titre: titre.Intitule,
                            agent: agent
                        })
                    }
                    else{
                        res.status(400).json({reponse: "échec"})
                    }
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    //envoyer toutes les departement et titres
    static async getAllDepartementAndTitre(res){
        try{
            const departement = await Departement.getAllDepartement()
            const titre = await Titre.getAllTitre()

            res.status(200).json({
                departement: departement,
                titre: titre
            })
        }
        catch(erreur){
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }

    }

    //envoyer les cours
    static async getLastId(){        
        try{
            const allId = await Agent_M.getAllId()        
            let taille = allId.length
            
            
            return allId[taille - 1].id
        }
        catch(erreur){                    
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    static async ajouterAgent(req, res){
        try {
            let {nom, postNom, prenom, idDepartement, idTitre, telephone} = req.body
            
            if(typeof nom !== 'undefined' && typeof postNom !== 'undefined' && typeof prenom !== 'undefined' && typeof idDepartement !== 'undefined' && 
                typeof idTitre !== 'undefined' && typeof telephone !== 'undefined'){
                if(nom && postNom && prenom && idDepartement && idTitre && telephone){
                    //bloquer les injections
                    nom = validator.escape(nom)
                    postNom = validator.escape(postNom)
                    prenom = validator.escape(prenom)
                    idDepartement = validator.escape(idDepartement)
                    idTitre = validator.escape(idTitre)
                    telephone = validator.escape(telephone)
                    
                    //vérifier que l'agent n'existe pas
                    if(!await Agent_M.checkTelephone(telephone)){
                        //le dernier id
                        let lastId = await Agent.getLastId()
                        let idAgent = lastId + 1
                        //transtyper les Ids
                        idDepartement = Number(idDepartement)
                        idTitre = Number(idTitre)

                        //l'année
                        const date = new Date()
                        const annee = date.getFullYear();

                        const matricule = `${annee}${nom.charAt(0).toUpperCase()}${postNom.charAt(0).toUpperCase()}${prenom.charAt(0).toUpperCase()}${idAgent}`;

                        await Agent_M.createAgent(nom, postNom, prenom, matricule, idDepartement, idTitre, telephone)

                        res.status(200).json({
                            reponse: 'success'
                        })
                    }
                    else{
                        res.status(400).json({
                            reponse: "l'agent existe"
                        })
                    }                    
                }
                else{
                    res.status(400).json({
                        reponse: "vide"
                    })
                }
            }
            else{
                res.status(403).json({
                    reponse: 'interdit'
                })
            }
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                reponse: 'erreur serveur'
            })
        }
        
    }

    static async getAgentDepartement(req, res){
        try{
            let {idDepartement} = req.params
                    
            if(typeof idDepartement != "undefined"){
                if(idDepartement){
                    //bloquer les injections
                    idDepartement = validator.escape(idDepartement)
                    //convertir en entier
                    idDepartement = Number(idDepartement)

                    const agents = await Agent_M.getAgentDepartemnt(idDepartement)
                                            
                    res.status(200).json({
                        agents: agents
                    })
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    static async setAgentJour(req, res){
        try{
            let {idAgent} = req.params
                    
            if(typeof idAgent != "undefined"){
                if(idAgent){
                    //bloquer les injections
                    idAgent = validator.escape(idAgent)
                    //convertir en entier
                    idAgent = Number(idAgent)

                    //supprimer l'agent du shift de la nuit
                    AgentSoiree.deleteAgent(idAgent)

                    //ajouter l'agent au shift de jour
                    AgentMatin.setAgent(idAgent)
                                            
                    res.status(200).json({
                        reponse: "SUCCESS"
                    })
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    static async setAgentNuit(req, res){
        try{
            let {idAgent} = req.params
                    
            if(typeof idAgent != "undefined"){
                if(idAgent){
                    //bloquer les injections
                    idAgent = validator.escape(idAgent)
                    //convertir en entier
                    idAgent = Number(idAgent)

                    //supprimer l'agent du shift de jour
                    AgentMatin.deleteAgent(idAgent)
                    
                    //ajouter l'agent au shift de la nuit
                    AgentSoiree.setAgent(idAgent)
                                            
                    res.status(200).json({
                        reponse: "SUCCESS"
                    })
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    static async checkShift(req, res){
        try{
            let {idAgent} = req.params
                    
            if(typeof idAgent != "undefined"){
                if(idAgent){
                    //bloquer les injections
                    idAgent = validator.escape(idAgent)
                    //convertir en entier
                    idAgent = Number(idAgent)

                    if(await AgentMatin.checkAgent(idAgent)){
                        res.status(200).json({
                            jour: true,
                            nuit: false,
                        })
                    }
                    else if(await AgentSoiree.checkAgent(idAgent)){
                        res.status(200).json({
                            jour: false,
                            nuit: true,
                        })
                    }
                    else{
                        res.status(200).json({
                            jour: false,
                            nuit: false,
                        })
                    }
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    static async getRapportPointageDepartement(req, res){
        try{
            let {idDepartement, mois} = req.params
                    
            if(typeof idDepartement != "undefined" && typeof mois != "undefined"){
                if(idDepartement){
                    //bloquer les injections
                    idDepartement = validator.escape(idDepartement)
                    //convertir en entier
                    idDepartement = Number(idDepartement)
                    mois = Number(mois)

                    //l'année
                    const date = new Date()
                    const anneeActuelle = date.getFullYear();

                    if(await Departement.checkDepartement(idDepartement)){
                        const rapport = await Presence.getRapportDepartement(idDepartement, mois, anneeActuelle)
                        res.status(200).json({
                            rapport: rapport
                        })
                    }
                    else{
                        res.status(400).json({reponse: "non trouvé"})
                    }
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

    static async getRapportPointageAgent(req, res){
        try{
            let {idAgent, mois} = req.params
                    
            if(typeof idAgent != "undefined" && typeof mois != "undefined"){
                if(idAgent){
                    //bloquer les injections
                    idAgent = validator.escape(idAgent)
                    //convertir en entier
                    idAgent = Number(idAgent)
                    mois = Number(mois)

                    //l'année
                    const date = new Date()
                    const anneeActuelle = date.getFullYear();

                    const rapport = await Presence.getRapportAgent(idAgent, mois, anneeActuelle)
                    res.status(200).json({
                        rapport: rapport
                    })
                }
                else{
                    res.status(400).json({reponse: "vide"})
                }
            }
            else{
                res.status(403).json({reponse: "interdit"})
            }
        }
        catch(erreur){   
            console.log(erreur);
                                                                                  
            res.status(500).json({
                reponse: "erreur serveur"
            })
        }
    }

}

module.exports = Agent