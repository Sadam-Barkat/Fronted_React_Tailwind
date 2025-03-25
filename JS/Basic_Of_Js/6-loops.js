// let num = prompt("Enter a number :")

// for(let i = 1; i<=num; i++){
//     console.log(i)
// }
// console.log("Ended For loop")

//while loop 
// let num = 1
// do{
//     console.log(num)
//     num += 1
// }
// while(num<=10);

// //for-of loop
// let str = "sadamkhan"
// for(let i of str){
//     console.log(i);
// }

// for-in loop
// let student = {
//     fullname:"Sadam",
//     age:25,
//     cgpa:3.55,
//     dept:"Computer Sceince"
// }
// for(let key in student){
//     console.log("key :", key, "value :", student[key]);
// }

// //find all even numbers from 0 to 100
// for(let i=0; i<=100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

let gameNum = 25
let userNum = prompt("Guess the number :")

while(gameNum != userNum){
    userNum = prompt("Wrong guess enter again :")
}
console.log("Congratuilation you win the game")