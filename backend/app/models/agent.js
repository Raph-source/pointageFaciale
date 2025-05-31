const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Agent{
    //récupere les données du user
    static async authentification(matricule, mdp){
        const user = await prisma.agent.findFirst({
            where: {
                Matricule: matricule,
                Mdp: mdp
            }
        })

        return user  
    }

    //récupère l'id du user
    static async getId(email, mdp){
        const user = await prisma.utilisateur.findUnique({
            where: {
                email: email,
                mdp: mdp
            }
        })

        return user.id
        
    }

    //retourne le dernier id de la table agent
    static async getAllId(){
        const trouver = await prisma.agent.findMany()
   
        return trouver
    }

    //permet de créer un agent
    static async createAgent(nom, postNom, prenom, matricule, idDepartement, idTitre, telephone){
        await prisma.agent.create({
            data: {
                Nom: nom,
                PostNom: postNom,
                Prenom: prenom,
                Matricule: matricule,
                idDepartement: idDepartement,
                idTitre: idTitre,
                Telehone: telephone
            }
        })
    }

    //permet de vérifier si un numéro de téléphone existe
    static async checkTelephone(telephone){
        const trouver = await prisma.agent.findMany({
            where: {
                Telehone: telephone
            }
        })
                
        if(trouver.length > 0)
            return true
        return false
    }

    static async getAgentDepartemnt(idDepartement){
        const trouver = await prisma.agent.findMany({
            where: {
                idDepartement: idDepartement
            },
            select: {
                id: true,
                Nom: true,
                PostNom: true,
                Prenom: true,
                Matricule: true,
            }
        })

        return trouver
    }

    static async getAgentDpt(idAgent){
        const agent = await  prisma.agent.findUnique({where : {id : parseInt(idAgent)},
            include : {departement : true ,titre : true}})

        return agent
    }
    static async deleteAgent(idAgent){

        try {
            await prisma.presence.deleteMany({
                where: {
                    idAgent: parseInt(idAgent),
                }
            });
            await prisma.agent.delete({
                where: {
                    id: parseInt(idAgent),
                }
            });

            return "operation reussi"
        }catch (e) {
            return e
        }
    }
}

module.exports = Agent