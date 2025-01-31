const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Departement{
    static async getAllDepartement(){
        return await prisma.departement.findMany()
    }
}

module.exports = Departement