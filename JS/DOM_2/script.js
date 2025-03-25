// Question # 1
let button = document.createElement("button")
button.innerText = "Click here!"
button.style.backgroundColor = "red"
button.style.color = "white"

let body = document.querySelector("body")
body.prepend(button)

let p = document.createElement("p")
p.innerHTML = "<h1>this is my paragparth</h1>"
body.append(p)

// Question # 2
let para = document.querySelector("p")
console.log(para)


