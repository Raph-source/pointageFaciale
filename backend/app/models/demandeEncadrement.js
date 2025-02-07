const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class DemandeEncadrement {
    //ajoute une démande d'encadrement
    static async setDemande(difficulte, dateActuelle, idEtudiant, idCours){
        idEtudiant = Number(idEtudiant)
        idCours = Number(idCours)

        await prisma.demandeEncadrement.create({
          data: {
            difficulte: difficulte,
            date: dateActuelle,
            idEtudiant: idEtudiant,
            idCours: idCours
          }
        })
    }

    //retourne toutes les demandes d'endrement d'un cours
    static async getDemande(idCours){
      idCours = Number(idCours)

      const demandes = await prisma.demandeEncadrement.findMany({
        where: {
          idCours: idCours, 
        },
        select: {
          etudiant: { 
            select: {
              nom: true,
              postNom: true,
              prenom: true,
            },
          },
          date: true,        
          difficulte: true,  
        },
      });

        return demandes
    }

    //compte les demandes d'encadrement d'un cours
    static async countDemande(idCours){
        idCours = Number(idCours)

        const nombreDemande = await prisma.demandeEncadrement.count({
          where: {
            idCours: idCours,
          },
        });
        
        return nombreDemande
    }

    //retourne la liste des emails des étudiants ayant soumis une démande pour un cours
    static async getEmailEtudiant(idCours){
        idCours = Number(idCours)

        const emails = await prisma.demandeEncadrement.findMany({
            where: {
              idCours: idCours, 
            },
            select: {
              etudiant: { 
                select: {
                  email: true,
                },
              },
            },
          });
        
        return emails
    }

    //retourne true l'id de l'étudiant et du cours existe et false sinon
    static async checkEtudiant(idEtudiant, idCours){  
        idEtudiant = Number(idEtudiant)
        idCours = Number(idCours)
              
        const trouver = await prisma.demandeEncadrement.findMany({
          where: {
            idEtudiant: idEtudiant,
            idCours: idCours
          }
        })

        if(trouver.length > 0)
            return true
        return false
    }

    //met à jours la demande d'encadrement d'un étudiant
    static async updateDemande(difficulte, dateActuelle, idEtudiant, idCours){
        idEtudiant = Number(idEtudiant)
        idCours = Number(idCours)

        // l'id de la demande
        const demande = await prisma.demandeEncadrement.findFirst({
          where: {
            idEtudiant: idEtudiant,
            idCours: idCours
          },
          select: {
            id: true
          }
        })

        const idDemande = demande.id

        // mettre à jour
        await prisma.demandeEncadrement.update({
            where: {
              id: idDemande
            },
            data: {
              difficulte: difficulte,
              date: dateActuelle
            }
        })          
      }
}

module.exports = DemandeEncadrement