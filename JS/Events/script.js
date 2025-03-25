let mode = document.querySelector("#mode")
let currMode = "Light"

let body = document.querySelector("body")


mode.addEventListener("click", () =>{
    if(currMode == "Light"){
        body.classList.add("dark")
        body.classList.remove("light")
        currMode = "Dark"
    }
    else{
        body.classList.add("light")
        body.classList.remove("dark")
        currMode = "Light"
    }
    console.log(currMode)
})