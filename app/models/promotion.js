const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Promotion{
    #id
    #intitule

    //retourne la liste des toutes les promotions
    static async getAllPromotion(){
        const promotions = await prisma.promotion.findMany()
        
        return await promotions
    }

    //vérifie si l'id d'une promotion existe
    static async checkPromotion(id){
        id = Number(id)
        
        const promotion = await prisma.promotion.findUnique({
            where:{
                id: id
            }
        })
        
        if(promotion)
            return true
        return false
    }

}

module.exports = Promotion