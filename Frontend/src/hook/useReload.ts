export const UseReload = () =>{
    const reset = () =>{
        const inputs = document.querySelectorAll("input")

        inputs.forEach((element) =>{
            if (element.getAttribute("type") != "submit"){
                element.value = ""
            }
        })
        const select = document.querySelectorAll("select")
        if (select){
            select.forEach((element) => element.value == null)
        }
    }

    return {reset}
}