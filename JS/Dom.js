// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.body.childNodes);
// // console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
//

const elementById = document.getElementById("head");
console.log(elementById.innerHTML);
elementById.innerHTML = "Hello World";
// console.log(elementById.innerHTML);
