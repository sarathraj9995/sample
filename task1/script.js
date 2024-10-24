const btm = document.querySelector(".btm")
const container = document.querySelector(".container")
btm.addEventListener("click", (e)=>{
    e.preventDefault()

    if (btm.innerText =="Light"){
         container.style.backgroundColor = "black"
         btm.innerText ="Dark"
    }else {
        container.style.backgroundColor = "white"
        btm.innerText ="Light"

    
    }
    
})