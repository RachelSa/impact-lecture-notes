// defining and calling a function
// function cat(){
//   console.log("cat")
// }
// cat()

// anonymous function
// let dog = function(){
//   console.log("dog")
// }
// dog()

// arrow function
// let squirrel = () => {
//   console.log("squirrel")
// }
// squirrel()

// passing in arguments
// let squirrel = (name) => {
//   console.log(name + " is a squirrel")
// }
// squirrel("")

// looping with forEach
// let squirrelNames = ["Mack", "Pack", "Jack", "Quack"]
// let printer = squirrelNames.forEach((name) => {
//     let sentence = name + " is a squirrel"
//     console.log(sentence)
//     return sentence
// })
// console.log(printer)

// looping with map
// let squirrelNames = ["Mack", "Pack", "Jack", "Quack"]
// let printer = squirrelNames.map((name) => {
//   let sentence = name + " is a squirrel"
//   console.log(sentence)
//   return sentence
// })
// console.log(printer)

// Assignment:
// create an index.js file
// write a JS for loop (not using forEach; google 'JavaScript for loop')
// the for loop iterate over and array on name strings and log each name
// run the file to see if the names print

// if / else
// let isBigNumber = (num) => {
//   if (num > 10) {
//     console.log("big number!")
//   } else {
//     console.log("not big")
//   }
// }
// isBigNumber(11)
// isBigNumber(5)

// ternary operator
// let isBigNumber = (num) => {
//   return num > 10 ? true : false
// }
// console.log(isBigNumber(11))
// console.log(isBigNumber(5))

//switch
// let food = "soup"
// switch(food) {
//   case "salad":
//     console.log("salad fork");
//     break;
//   case "steak":
//     console.log("steak knife");
//     break;
//   case "soup":
//     console.log("soup spoon");
//     break;
//   case "butter":
//     console.log("butter knife");
//     break;
//   default:
//     console.log("sorry, I do not have a utensil suggestion");
// }

// hoisting
// what will happen when I run this?
// const a = 1;
// (() => {
//   a = 2
//   console.log(a)
// })()

// let a = 1;
// (() => {
//   a = 2
//   console.log(a)
// })()

// var a = 1;
// (() => {
//   a = 2
//   console.log(a)
// })()

// (() => {
//   console.log(word)
//   var word = "parsnip"
// })()

// (() => {
//   console.log(word)
//   let word = "parsnip"
// })()

// activity
// 1. define a function that takes in a number as an argument and returns the number multiplied by 5

// 2. define another function that takes in a number (n) and a function as arguments and determines whether the return value of n passed in as an argument to the function (feel free to use the function you defined in step 1) is greater than 100. Should return true or false.

// 3. write out the order you think these numbers will log to console. (Research anything that looks unfamiliar.)

// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 3000)
// console.log(3)
