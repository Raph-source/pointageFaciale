const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class ResponsableTutorat{
    //retourne l'id du responsable du tutorat si l'utilisateur qui se connecte en est un, et false sinon 
    static async getId(idUtilisateur){   
        idUtilisateur = Number(idUtilisateur)
        
        const idResponsableTutorat = await prisma.responsableTutorat.findUnique({
            where: {
                idUtilisateur: idUtilisateur
            }
        })

        if(idResponsableTutorat)
            return idResponsableTutorat
        return false
    }
}

module.exports = ResponsableTutorat