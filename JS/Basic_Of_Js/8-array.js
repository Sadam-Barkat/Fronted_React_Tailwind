// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length)

// let student = ["Sadam", "Ali", "Ahmad", "Subhan"]
// console.log(student)
// console.log(student[2])

// let student = ["Sadam", "Ali", "Ahmad", "Subhan"]
// for(let i of student){
//     console.log(i)
// }

// let makrs = [10, 20, 30, 50, 80, 90]
// let sum = 0
// for(let num of makrs){
//     sum += num
// }
// let avg = sum/makrs.length
// console.log(avg)

//Add 10% discount in the salary
// let salary = [100, 200, 300, 400, 500]
// let arr = []
// for(let val of salary){
//     discount = (val * 10)/100
//     sal = val - discount
//     arr.push(sal)
// }
// console.log(arr)

// //Array methods
// let numbers = [1,2,3,4,5]
// console.log(numbers.toString())
// numbers.push(20)
// console.log(numbers)
// let poped_item = numbers.pop()
// console.log(numbers)
// console.log(poped_item)

// //Concate method
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// let arr3 = arr1.concat(arr2)
// console.log(arr3)
// console.log(arr1)
// console.log(arr2)

// //Add and shift methods
// let arr = [1,2,3,4,5]
// arr.unshift(10)
// console.log(arr)
// let a = arr.shift()
// console.log(arr)
// console.log(a)

// //Sclice method
// let arr = [1,2,3,4,5]
// console.log(arr.slice(1,4))

// //splice method
// let arr = [1,2,3,4,5]
// arr.splice(2, 100)
// console.log(arr)

let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"]
console.log(companies)
companies.shift()
console.log(companies)

companies.splice(1, 1, "ola")
console.log(companies)

companies.push("amazon")
console.log(companies)