const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Cours{
    //retourne l'intitulé d'un cours
    static async getNom(idCours){
        idCours = Number(idCours)

        const trouver = await prisma.cours.findUnique({
            where: {
                id: idCours
            },
            select: {
                intitule: true
            }
        })
        
        return trouver.intitule
    }

    //retourne la liste des cours d'une promotion
    static async getAllCours(idPromotion){  
        idPromotion = Number(idPromotion)    
        const listeCours = await prisma.cours.findMany({
            where: {
                idPromotion: idPromotion,
            }
        })
        return listeCours
    }

    //ajouter un cours pour promotion
    static async ajouterCours(intitule, idPromotion){
        await prisma.cours.create({
            data: {
                intitule: intitule,
                idPromotion: idPromotion
            }
        })
    }

    //cherche un cours dans une promotion
    static async checkCours(intitule, idPromotion){
        const trouver = await prisma.cours.findMany({
            where: {
                intitule: intitule,
                idPromotion: idPromotion
            }
        })
                
        if(trouver.length > 0)
            return true
        return false
    }
    
    //retourne true l'id du cours existe et false sinon
    static async checkCoursByid(id){        
        const trouver = await prisma.cours.findUnique({
            where: {
                id: id
            }
        })
        if(trouver)
            return true
        return false
    }

    //supprime un cours
    static async supprimerCours(idCours){
       await prisma.cours.delete({
            where: {
                id: idCours
            }
       })
    }
}

module.exports = Cours