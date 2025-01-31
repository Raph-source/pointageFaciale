const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Titre{
    static async getTitre(idTitre){
        let titre = await prisma.titre.findUnique({
            where: {
                id: idTitre
            }
        })
        
        return titre
    }

    static async getAllTitre(){
        return await prisma.titre.findMany()
    }
}

module.exports = Titre