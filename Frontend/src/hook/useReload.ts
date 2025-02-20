export const UseReload = () =>{
    const reset = () =>{
        const inputs = document.querySelectorAll("input")

        inputs.forEach((element) =>{
            if (element.getAttribute("type") != "submit"){
                element.value = ""
            }
        })
    }
    return {reset}
}