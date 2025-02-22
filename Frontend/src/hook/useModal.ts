export const UseModal =  (classe) =>{
    const addClass = () =>{
        document.body.classList.add(classe)
    }
    const removeClass = () =>{
        document.body.classList.remove(classe)
    }

    return {addClass,removeClass}
}