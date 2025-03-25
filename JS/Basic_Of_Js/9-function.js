// function sum(x, y){
//     add = x + y
//     return add
// }

// let val = sum(2, 40)
// console.log(val)

// // Using Arrow to create a function
// const sum = (a, b) =>{
//     return a+b
// }
// let a = sum(1,2)
// console.log(a)

// // Create a function which return vowel's
// function vowel(str){
//     arr2 = []
//     for(let i of arr){
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//             arr2.push(i)
//         }
//     }
//     return arr2
// }let a = vowel("sadam")
// console.log(a)

// // forEach function
// let arr = [1,2,3,4,5]
// arr.forEach(function fun(val){
//     console.log(val)
// })

// let arr = [1,2,3,4,5]
// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr)
// })


// let arr = [1,2,3,4,5]
// arr.forEach((val) => {
//     console.log(val*val)
// })

// // map method
// let arr = [1,2,3,4,5]
// a = arr.filter((val) => {
//     return val % 2 == 0;
// })
// console.log(a)

// Reduce method
// let arr = [1,2,3,4,5, 20, 30]
// let a = arr.reduce((pre, cur) => {
//     return pre > cur ? pre : cur
// })
// console.log(a)

// // Task
// let marks = [30, 50, 65, 90, 100, 130, 5, 30]
// let toppers = marks.filter((val) =>{
//     return val >= 90;
// })
// console.log(a)

// Task
let n = prompt("Enter the number: ");
let arr = [];
for (let i = 0; i < n; i++) {
    let val = parseInt(prompt("Enter the value: "), 10); // Convert input to integer
    arr.push(val);
}
console.log(arr);

// sum of array
let sum = arr.reduce(function(pre, cur){
    return pre + cur;
})
console.log(sum)

// product of array
let product = arr.reduce(function(pre, cur){
    return pre*cur;
})
console.log(product)