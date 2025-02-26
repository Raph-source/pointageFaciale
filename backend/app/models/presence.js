const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Presence{
    // retourne les données de la présence des agents d'un departement
    static async getRapportDepartement(idDepartement, mois, anneeActuelle){
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
  

    static async calculerSalaire(agentId, mois, annee) {
      const presences = await prisma.presence.findMany({
        where: {
          idAgent: agentId,
          Date: {
            gte: new Date(`${annee}-${mois}-01`),
            lt: new Date(`${annee}-${mois + 1}-01`), // Limite supérieure (début du mois suivant)
          },
        },
        select: {
          HeureArrivee: true,
          HeureSortie: true,
        },
      });
    
      if (!presences.length) {
        return false
      }
    
      // Calcul total des heures travaillées
      let totalHeures = 0;
      presences.forEach((presence) => {
        const heuresTravaillees =
          (new Date(presence.HeureSortie) - new Date(presence.HeureArrivee)) / 3600000; // Convertir ms en heures
        totalHeures += heuresTravaillees;
      });
    
      // Récupérer le salaire horaire de l'agent
      const agent = await prisma.agent.findUnique({
        where: { id: agentId },
        select: {
          titre: {
            select: {
              salaire: {
                select: { Montant: true },
              },
            },
          },
        },
      });
    
      const salaireHeure = agent.titre.salaire.Montant;
      const salaireMensuel = totalHeures * salaireHeure;      
    
      return {
        totalHeures: totalHeures.toFixed(2),
        salaireMensuel: salaireMensuel.toFixed(2),
      }
    }
}

module.exports = Presence