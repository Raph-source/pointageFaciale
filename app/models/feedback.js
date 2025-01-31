const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Feedback{
    //retourne la liste de feedback
    static async getFeedback(idCoursLance){
        idCoursLance = Number(idCoursLance)

        const feedbacks = await prisma.feedback.findMany({
            where: {
                idCoursLance: idCoursLance
            }
        })

        return feedbacks
    }

    // insère un feedback
    static async setFeedback(avis, idCoursLance, idCategorie, idEtudiant, dateActuelle){
        idCoursLance = Number(idCoursLance)
        idCategorie = Number(idCategorie)
        idEtudiant = Number(idEtudiant)

        await prisma.feedback.create({
            data: {
                avis: avis,
                idCoursLance: idCoursLance,
                idCategorie: idCategorie,
                idEtudiant: idEtudiant,
                date: dateActuelle
            }
        })
    }

}

module.exports = Feedback