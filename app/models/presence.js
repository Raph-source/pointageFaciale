const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Presence{
    // retourne les données de la présence des agents d'un departement
    static async getRapportDepartement(idAgent, mois, anneeActuelle){
        const presenceData = await prisma.presence.findMany({
            where: {
              agent: {
                departement: {
                  id: idDepartement, // Condition pour le département
                },
              },
              AND: [
                {
                  Date: {
                    gte: new Date(anneeActuelle, mois - 1, 1), // Début du mois
                  },
                },
                {
                    Date: {
                    lt: new Date(anneeActuelle, mois, 1), // Fin du mois (exclu)
                  },
                },
              ],
            },
            select: {
              agent: {
                select: {
                  Nom: true,
                  PostNom: true,
                  Prenom: true,
                  Matricule: true,
                },
              },
              HeureArrivee: true,
              HeureSortie: true,
            },
          });
        
          return presenceData;
    }

    // retourne les données de la présence d'un agents
    static async getRapportAgent(idAgent, mois, anneeActuelle){
        const presenceData = await prisma.presence.findMany({
            where: {
              agent: {
                id: idAgent,
              },
              AND: [
                {
                  Date: {
                    gte: new Date(anneeActuelle, mois - 1, 1), // Début du mois
                  },
                },
                {
                    Date: {
                    lt: new Date(anneeActuelle, mois, 1), // Fin du mois (exclu)
                  },
                },
              ],
            },
            select: {
              agent: {
                select: {
                  Nom: true,
                  PostNom: true,
                  Prenom: true,
                  Matricule: true,
                },
              },
              HeureArrivee: true,
              HeureSortie: true,
            },
          });
        
          return presenceData;
    }
    

}

module.exports = Presence