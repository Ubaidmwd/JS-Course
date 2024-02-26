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
// arr.unshift(1); // adding data from the start
// arr.shift(); // remove data from the start
// arr.pop(); // remove data from the end of array
// arr.push(6); // adding data from the end of array
// console.log(arr.at(2)); // at is used for finding elemet on index numuber
// arr.splice(0, 2, 6); //The splice() method can be used to add new items to an array. first parameter is used for position & second is used for how many elements removing from array & the other parameter is used for add element in array
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// console.log(myGirls + "," + myBoys);// concat method in js
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
// const spliced = months.toSpliced(4, 2, "May"); // 1st method is used for position wher you want to add new element in array,

// console.log(spliced);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0, 5); // 1st parameter is used for the startin index while the 2nd parameter is used for end of index number
// console.log(citrus);

const ageFind = (age) => {
  return age >= 18;
};
console.log(ageFind(2));
