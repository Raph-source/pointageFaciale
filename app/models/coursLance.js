const { relative } = require('path')
const Model = require('./model')
const { log } = require('console')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


class CoursLance{
    //retourne l'id du cours lancé
    static async getId(idCours){
        idCours = Number(idCours)

        const trouver = await prisma.coursLance.findUnique({
            where: {
                idCours: idCours
            },
            select: {
                id: true
            }
        })
        return trouver.id
    }

    //retourne tous les cours lancés
    static async getCoursLance(idPromotion){
        idPromotion = Number(idPromotion)

        let coursLance = await prisma.coursLance.findMany({
            where: {
              status: true,
              cours: {
                promotion: {
                  id: idPromotion, // Le paramètre de la requête
                },
              },
            },
            select: {
              id: true, // idCoursLance
              dateLancement: true,
              tuteur: {
                select: {
                  prenom: true, // prenomTuteur
                  nom: true,    // nomTuteur
                },
              },
              cours: {
                select: {
                  intitule: true, // intitule du cours
                },
              },
            },
        })   
        
        return coursLance

    }

    supprimerCours(idCours){
        
    }

    // insère les données du cours lancé
    static async lancerCours(dateLancement, idCours, idResponsableTutorat, idTuteur){
        idCours = Number(idCours)
        idResponsableTutorat = Number(idResponsableTutorat)
        idTuteur = Number(idTuteur)

        await prisma.coursLance.create({
            data: {
                dateLancement: dateLancement,
                idCours: idCours,
                idResponsableTutorat: idResponsableTutorat, 
                idTuteur: idTuteur
            }
        })
    }

    //met à jours un cours qui à déjà été lancé
    static async updateCours(dateLancement, idCours, idResponsableTutorat, idTuteur){
        idCours = Number(idCours)
        idResponsableTutorat = Number(idResponsableTutorat)
        idTuteur = Number(idTuteur)

        await prisma.coursLance.update({
            where: {
                idCours: idCours
            },
            data: {
                dateLancement: dateLancement,
                idCours: idCours,
                idResponsableTutorat: idResponsableTutorat,
                idTuteur: idTuteur,
                status: true
            }
        })
    }

    static async cloturerCours(idCoursLance, dateActuelle){
        idCoursLance = Number(idCoursLance)

        await prisma.coursLance.update({
            where: {
              id: idCoursLance,
            },
            data: {
              dateFermeture: dateActuelle,
              status: false,
            },
          });

    }

    //retourne true si le cours est déjà lancé et false sinon
    static async checkCours(idCours){ 
        idCours = Number(idCours)

        const trouver = await prisma.coursLance.findUnique({
            where: {
                idCours: idCours,
                status: true
            }
        })
        
        if(trouver){
            return true            
        }

        return false
    }

    //retourne true si le cours est clôturé et false sinon
    static async checkCoursClotuer(idCours){                
        idCours = Number(idCours)

        const trouver = await prisma.coursLance.findUnique({
            where: {
                idCours: idCours,
                status: false
            }
        })

        if(trouver)
            return true
        return false
    }

    //retourne true si le cours est clôturé et false sinon
    static async checkCoursForFeedback(idCours){   
        idCours = Number(idCours)     
        const trouver = await prisma.coursLance.findUnique({
            where: {
                idCours: idCours,
                status: false,
                dateFermeture: {
                    not: null
                }
            }
        })

        if(trouver)
            return true
        return false
    }
    
    //vérifie si un cours est lancé
    static async checkCoursLance(idCoursLance){
        idCoursLance = Number(idCoursLance)

        const trouver = await prisma.coursLance.findUnique({
            where: {
                id: idCoursLance
            }
        })

        if(trouver)
            return true
        return false
    }

    //retourne true si le cours à déjà été lancé et clôturé et false sinon
    static async checkCoursForUpdate(idCours){
        idCours = Number(idCours)

        const trouver = await prisma.coursLance.findUnique({
            where: {
                idCours: idCours,
                status: false,
            }
        })
        
        if(trouver)
            return true
        return false

    }
    //reourne l'id du cours qui est lancé
    static async getIdCours(idCoursLance){
        const trouver = await prisma.coursLance.findUnique({
            where: {
                id: idCoursLance
            },
            select: {
                idCours: true
            }
        })
        return trouver.idCours
    }

    //retourne true si le tuteur a un cours
    static async checkTuteur(idTuteur){
        const trouver = await prisma.coursLance.findMany({
            where: {
                idTuteur: idTuteur
            }
        })

        if(trouver.length > 0)
            return true
        return false
    }
}

module.exports = CoursLance