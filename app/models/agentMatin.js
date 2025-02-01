const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
class AgentMatin{

    //ajoute un agent
    static async setAgent(idAgent){
        await prisma.agentMatin.create({
            data: {
                idAgent: idAgent,
            }
        })
    }

    //supprime un agent
    static async deleteAgent(idAgent){
        await prisma.agentMatin.deleteMany({
            where: {
                idAgent: idAgent
            }
        })
    }

    //retourne true si l'id de l'agent existe
    static async checkAgent(idAgent){
        let trouver = await prisma.agentMatin.findMany({
            where: {
                idAgent: idAgent
            }
        })

        if(trouver.length > 0)
                return true
        return false
    }
}

module.exports = AgentMatin
