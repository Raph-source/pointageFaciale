export const UseTools = () => {

    const getMonthName = () => {
        const moisNow = new Date().getMonth()
        const mois = ['Janvier', 'Février','Mars','Avril','Mais',"Juin", 'Juillet','Août','Septembre',
            'Octobre','Novembre','Decembre']

        const monthName = mois[moisNow]
        return monthName
    }
    const getNombreDaysMonth = () => {
        const moisNow = new Date().getMonth()
        const mois = ['31', '28','31','30','31',"30", '31','31','30',
            '31','30','31']
        const monthName = mois[moisNow]
        return monthName
    }
    const setUcFirst = (str : string) =>{
        const UcFirst = str.charAt(0).toUpperCase() + str.slice(1)
        return UcFirst
    }


    return {getMonthName,setUcFirst,getNombreDaysMonth}
}