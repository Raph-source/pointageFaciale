export const UseReload = () =>{
    const reset = () =>{
        const inputs = document.querySelectorAll("input")

        inputs.forEach((element) =>{
            if (element.getAttribute("type") != "submit"){
                element.value = ""
            }
        })
        const select = document.querySelectorAll('select')
        console.log(select)
        if (select){
            select.forEach((element) => {
                console.log(element)
            })
        }
    }

    return {reset}
}