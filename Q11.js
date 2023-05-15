//Currying

console.log("Welcome to Programiz!");
// Question--> 1
// function sum(a){
//     return function (b){
//         return function (c){
//             console.log(a+b+c);
//         }
//     }
// }
// sum(3)(21)(1);
// Question--> 2
// better way to do this

// function evaluate(param){
//     return function(x1){
//         return function(x2){
//             if(param === "add")return x1+x2;
//             else if(param === "sub")return x2-x2;
//             else if(param === "mul")return x1*x2;
//             else if(param === "divi")return x1/x2;
//         }
//     }
// }


// console.log(evaluate("add")(12)(34));


// Question--> 3

// function evaluate(a){
//     return function(b){
//         if(b)return evaluate(a+b);
//         return a;
//     }
// }

// console.log(evaluate(34)(12)(45)(54)(23)())

// Question--> 4

// currying and partial Application
// below is partial application
// there are not every function avaiable for every parameter
// function sum(a) {
//     return function (b, c) {
//         return a + b + c;
//     }
// }
// const x = sum(10);
// console.log(x(12, 12));
// console.log(x(1, 1));

// // or
// console.log(x(12, 12));

// // currying
// // there are every function for every parameter
// function sum2(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum2(12)(12)(12));

// Question--> 5
// Manipulating DOM element

// function updateElementText(id) {
//     return function (content) {
//         document.querySelector('#' + id).textContent = heading;
//     }
// }
// const updateHeader = updateElementText("heading");
// updateHeader("Hello World");

// Question-->6
// implement sum(1)(2)(3)(4) ----> sum(1,2,3,4)

// function curry(func) {
//     return function curriedFunc(...args) {
//         if (args.length >= func.length) {
//             return func(...args);
//         }
//         else {
//             return function (...next) {
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }
// const sum = (a,b,c,d) => a+b+c+d;
// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(4)(5));
