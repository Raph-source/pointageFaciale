const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Departement{
    static async getAllDepartement(){
        return await prisma.departement.findMany()
    }

    static async checkDepartement(id){
        let trouver = await prisma.departement.findMany({
            where: {
                id: id
            }
        })

        if(trouver.length > 0)
            return true
        return false
    }
}

module.exports = Departement