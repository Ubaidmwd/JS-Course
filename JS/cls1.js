// 1st method for declaration of variable
// var a = "classs one";
// var a = 123213;
// console.log(a);

// 2nd method for declaration of variable

// let a = "classs one";
// a = "abc";
// console.log(a);

// 3rd method for declaration of variable

// const a = "classs one";
// a = "abc";
// console.log(a);

//************** Operators in JS ****************/
// Arithmetic Operators . it is used for mathematically operations (+,-,%,/,*)
// Assignment Operators . it is used for assigning value to variable
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// let a = 4;
// let b = 9;
// const result = ++a + --b;

// //++a is example of prefix increment & b-- is the example of post fix
// console.log("sum of a and b == ", result);

// console.log(b--);

// let a = 5;
// let b = 4;
// Comparison Operators
// console.log(a == b); // true false
// console.log(typeof a);
// console.log(typeof b);
// console.log(a + b);
// console.log(a === b); // true false

// console.log(a !== b); // true false
// console.log(a <= b); // true false

// let text1 = "A";
// let text2 = "B";

// concat of string
// console.log(text1 + " " + text2);

// let text1 = "What a very ";
// text1 += "nice day";
// console.log(text1);

//JavaScript Logical Operators
// let a = 7;
// let b = 4;
// let c = 6;
// let d = 99;

// // console.log(a > b && a > c); // true false= false

// console.log(a > b || a > c || a > !d); // true false= true

// Numbers:
// let length = 16;
// let weight = 7.5;
// console.log(type of length);

// Strings:
// let color = "Yellow";
// let lastName = "Johnson";
// console.log(typeof color);

// Booleans
// let x = true;
// let y = false;
// console.log(typeof y);

// Object:
// let firstName = "John";
// let lastName = "Doe";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// // console.log(typeof person);
// console.log(person.firstName);

// Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof cars);

// Date object:
// const date = new Date("2022-03-25");
// console.log(typeof date);

// object {}
// array []

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const person2 = { ...person };
// person.firstName = "Jan";
// console.log(person2);
// console.log(person);
// console.log(person.firstName);
// let a = 9;
// let b = a;
// a = 10;
// console.log(b);
// const food = { beef: "🥩", bacon: "🥓" };

// const cloneFood = Object.assign({ address: "abc" }, food);
// food.beef = "🍔";
// console.log(cloneFood);
// console.log(food);

// const food = { beef: "🥩", bacon: "🥓" };

// const cloneFood = JSON.parse(JSON.stringify(food));

// console.log(cloneFood);

// function add(a, b) {
//   return a * b;
// }
// console.log(add(6, 6));

//array methods
// const arr = [1, 3, 4, 5];
// arr.unshift("wahab", "Hizbullah"); // adding data from the start
// arr.shift(); // remove data from the start
// console.log(arr);

// arr.pop(); // remove data from the end of array
// arr.push(6); // adding data from the end of array

// console.log(arr.at(2)); // at is used for finding elemet on index numuber
// arr.splice(2, 4, 3.5); //The splice() method can be used to add new items to an array. first parameter is used for position & second is used for how many elements removing from array & the other parameter is used for add element in array

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// console.log([myGirls + "," + myBoys]); // concat method in js
// const myChildren = myGirls.concat("Khan", myBoys); // is parameter is used for add new element other is a arry which we want
// console.log(myChildren);

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat(); // it is used for converting the array in one directional array
// console.log(newArr);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
// const spliced = months.toSpliced(4, 3, "May"); // 1st method is used for position wher you want to add new element in array,

// console.log(spliced);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); // 1st parameter is used for the startin index while the 2nd parameter is used for end of index number
// console.log(citrus);

// const ageFind = (age) => {
//   return age >= 18;
// };
// console.log(ageFind(2));

// const authState = true;

// console.log(authState === true ? "www.google.com" : "please login first");

// document.write(authState === true ? "www.google.com" : "please login first");
// const add = (a, b, c) => {
//   //   console.log("Arrow function in js");
//   console.log(a + b + c);
//   console.log(a - c);
// };
// add(4, 6, 8);
// add(5, 6, 7);

// const ageFind = (a) => {
//   if (a >= 18) {
//     console.log("you are allow for voting !");
//   } else {
//     console.log("you are not allow for voting !");
//   }
// };
// const user1 = 18;
// const user2 = 16;
// const user3 = 66;
// ageFind(user1);
// ageFind(user2);
// ageFind(user3);

// const calculateBilling = (a, b) => {
//   const totalUnits = a - b;
//   if (totalUnits > 0) {
//     if (totalUnits <= 100) {
//       // console.log("total bill is ", totalUnits * 8);
//       alert(`total units is ${totalUnits} total bill is ${totalUnits * 8}`);
//     } else if (totalUnits > 100) {
//       alert(`total units is ${totalUnits} total bill is ${totalUnits * 13}`);
//     } else if (totalUnits > 200) {
//       alert(`total units is ${totalUnits} total bill is ${totalUnits * 21}`);
//     }
//   } else {
//     confirm("Please confirm your current reading!");
//   }
// };

// const currentReading = prompt("Enter the current Reading plz");
// const prevReading = prompt("Enter the prev Reading plz");

// calculateBilling(currentReading, prevReading);

//looping

// const userData = ["Abdulwahab", "HizbUllah", "Saifullah"];
const userData = [
  { name: "Abdulwahab", age: 25 },
  { name: "HizbUllah", age: 28 },
  { name: "Saifullah", age: 30 },
];
// console.log(userData.name);
// for (let i = 0; i < userData.length; i++) {
//   console.log(i);
//   console.log(userData[i].name, userData[i].age);
// }

// console.log("After Looping");
// userData.map((user) => {
//   console.log(user.name);
//   console.log(user.age);
// });
for (let user in userData) {
  console.log(
    `my name is ${userData[user].name} &  my age is ${userData[user].age}`
  );
}
