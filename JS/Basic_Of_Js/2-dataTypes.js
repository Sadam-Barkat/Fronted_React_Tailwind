/*
There are two type of data premtive and none premtive
In Premtive there are 7 data types (Number, String, Boolean, Undefined, Null, BigInt, Symbol)
In None Premtive there are only object and in object there are two types of data (Arr, Function)
*/

//Premtive
let age = 24;
console.log(age)

let isFollow = true

let x = BigInt("123")
console.log(x)

let y = Symbol("Hello!")
console.log(y)

//None Premtive
const Student1 = {
    fullName: "Sadam Barkat",
    age: 24,
    cgpa: 3.55,
    dept: "Computer Science"
}
console.log(Student1)

const profile = {
    fullName: "Shadda Khapara",
    Posts: 195,
    followers: "590k",
    following: 4
}
console.log(profile)