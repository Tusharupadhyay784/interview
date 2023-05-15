// Synchronous Programming in js
// function greet(personName,age,callback,callback2){
//     let msg = "Hello " + personName
//     callback(msg);
//     callback2(age);
// }
// function logGreeting(greeting){
//     console.log(greeting);
// }
// function showAge(age){
//     console.log(age);
// }
// greet("Tushar",21,logGreeting,showAge);

// asynchronous programming in js

console.log("hello");
setTimeout(() => {
    console.log("Hari1");
}, 2000);

setTimeout(() => {
    console.log("Hari2");
}, 1000);
console.log("Bue")