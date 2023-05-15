// this keyboard in node with non strict mode
// console.log(this); // returns an empty object
// function showThis() {
//     console.log(this); // returns a global object
// }
// showThis();

// let obj = {
//     name :"Haribol",
//     f : function(){
//         console.log(this); // returns current object that is obj
//     }
// }
// obj.f();

// let obj = {
//     name: "Haribol",
//     f: function () {
//         // console.log(this);
//         function b() {
//             console.log(this); // return a global object
//         }
//         b();
//     }
// }
// obj.f();

// -----------------------
// using this in use strict mode
"use strict"

// console.log(this); //  returns an empty objects

// function showThis() {
//     console.log(this); // returns a undefined
// }
// showThis();

// let obj = {
//     name :"Haribol",
//     f : function(){
//         console.log(this); // returns current object that is obj
//     }
// }
// obj.f();


// let obj = {
//     name: "Haribol",
//     f: function () {
//         // console.log(this);
//         function b() {
//             console.log(this); // return undefined
//         }
//         b();
//     }
// }
// obj.f();

