// console.log("Haribol")
//  Function are the first class citizens
//function are treated as a variable
//1. assignment--> fn expression
// variable can be passed as parameter
// 2. Function can be passed as a parameter
// let fn = function cn(){
//     console.log(0);
// }
let fn = function (param) {
    console.log(0);
    return param
}
let x = fn(fn3);
// console.log(x); // undefined
x();
// IIFE=> Immediately Invoked Function Expression
//  /require, pollution
(function fn2() {
    console.log("This function runs automatically this func known as IIFE")
})(); 

function fn3(){
    console.log("returning a function");
}