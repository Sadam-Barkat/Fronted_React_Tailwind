// let dives = document.querySelectorAll(".box")
// dives[0].innerText = "Sadam"
// console.log(dives)

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs){
    div.innerText = `div ${idx}`;
    idx++;
}