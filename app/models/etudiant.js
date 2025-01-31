const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Etudiant{
    // retourne true le matricule de l'étudiant existe et false sinon
    static async checkEtudiant(matricule){
        const trouver = await prisma.etudiant.findUnique({
            where: {
                matricule: matricule
            }
        })

        if(trouver)
            return true
        return false
    }

    // retourne l'id d'un étudiant
    static async getId(matricule){
        const trouver = await prisma.etudiant.findUnique({
            where: {
                matricule: matricule
            },
            select: {
                id: true
            }
        })

        return trouver.id
    }

    // retourne l'id de la promotion de l'étudiant
    static async getIdPromotion(matricule){
        const trouver = await prisma.etudiant.findUnique({
            where: {
                matricule: matricule
            },
            select: {
                idPromotion: true
            }
        })
        
        return trouver.idPromotion
    }
    
    // retourne l'email de d'étudiant
    static async getEmail(idEtudiant){
        const trouver = await prisma.etudiant.findUnique({
            where: {
                id: idEtudiant
            },
            select: {
                email: true
            }
        })

        return trouver.email
    }
}

module.exports = Etudiant