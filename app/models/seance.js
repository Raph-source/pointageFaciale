const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
class Seance{

    static async getDateDerniereSeance(idCoursLance){       
        idCoursLance = Number(idCoursLance)

        const trouver = await prisma.seance.findFirst({
            where: {
              idCoursLance: idCoursLance,
            },
            orderBy: {
              id: 'desc',
            },
            select: {
              date: true,
            },
        });

        
        if(trouver)
            return new Date(trouver.date).toISOString().split('.')[0].replace('T', ' ')
        return 'aucune'
    }

    //retoune toutes les séances d'un cours lancé
    static async getSeance(idCoursLance){
        idCoursLance = Number(idCoursLance)

        const seances = await prisma.seance.findMany({
            where: {
                idCoursLance: idCoursLance
            }
        })

        return seances
    }

    //ajoute une séance
    static async setSeance(date, idCoursLance){
        
        idCoursLance = Number(idCoursLance)

        await prisma.seance.create({
            data: {
                date: date,
                idCoursLance: idCoursLance
            }
        })
    }

    //supprime toute les séances d'un cours lancé
    static async supprimerSeance(idCoursLance){
        idCoursLance = Number(idCoursLance)

        await prisma.seance.deleteMany({
            where: {
                idCoursLance: idCoursLance
            }
        })
    }
}
