// let obj1 = {
//     name: "Tushar",
//     func: function getName() {
//         return this.name;
//     }
// }
// const fun = obj1.func;
// let obj2 = { name: "Tony", fun };
// console.log(obj2.fun());
// call apply bind

// function sayHello(param) {
//     return "Hello " + this.name + " " + param;
// }
// const obj1 = { name: "Kolaveri" };
// console.log(sayHello.call(obj1, "Why This"));

// let person = {
//     age: 12,
//     getAge: function (param) {
//         console.log(this.age,param)
//     }
// }
// var person2 = {age:120};
// person.getAge.call(person2,"Hello Sir");

// function saySomething(message) {
//     return this.name + "is" + message;
// }
// const person = { name: "Interview" };
// console.log(saySomething.apply(person, ["This is something known as Something"]))

// let obj1 = {
//     detail: function (no, bname) {
//         console.log(no, bname, this.name);
//     }
// }
// let obj2 = { name: "Mangekyo" };
// const arr = obj1.detail.bind(obj2,2,3);
// arr();

/*

    local or function scope
    global scope
    block scope

    A prototype is a blueprint of an object




*/

// function greet(fn) {
//     console.log("Hello COOX");
//     fn();
// }
// function success() {
//     console.log("Greet function successfully executed")
// }
// greet(success);

// function add(a, b) {
//     console.log(a+b);
// }

// function takeNumber(a, b, callback) {
//     return callback(a, b);
// }

// takeNumber(12, 12, add);


// function addTo12(num) {
//     return num + 12;
// }
// console.log(addTo12(12));
// console.log(addTo12(12));
// console.log(addTo12(12));
// console.log(addTo12(12));
// it takes alot of space and new execution context will create
// function memo() {
//     const cache = {};
//     return function (num) {
//         if (num in cache) {
//             console.log("cache value");
//         }
//         else {
//             cache[num] = num + 12;
//         }
//         return cache[num];
//     }
// }


// const memofunc = memo();
// console.log(memofunc(12));
// console.log(memofunc(12));

/*
    DOM --> DOM STANDS FOR DOCUMENT OBJECT MODEL. DOM IS A PROGRAMMING INTERFACE FOR HTML AND XML


*/

// function varvs() {
//     var a = "Tushar";
//     let b = "Something";
// }
// console.log(a);
// console.log(b);


// Promise states
/*
4  states of promise
1. pending
2. fulfilled
3.  rejected
4. settled


Promise is a object that represents the eventual completion of an asynchronous operation.
*/
// function sumofthreeElements(...args) {
//     return new Promise((resolve, reject) => {
//         if (args.length > 3) {
//             reject("length should be less than 3")
//         }
//         else {
//             let sum = 0;
//             sum += args[0] + args[1] + args[2];
//             resolve("Sum of three numbers are " + sum);
//         }
//     })
// }
// sumofthreeElements(1, 2, 3, 4).then((e) => {
//     console.log(e);
// }).catch((e => {
//     console.log(e);
// }))
// const hero = {
//     power: 99,
//     getPower() {
//         return this.power;
//     }
// }
// const p = hero.getPower;
// console.log(p())
// console.log(hero.getPower())

// function bigFunc() {
//     const newArray = new Array(700).fill(null);
//     return function (element) {
//         return newArray[element];
//     }
// }
// const getElement = bigFunc(); // creating an array once
// console.log(getElement(699));

// function rotationRight(arr, rotation) {
//     if (rotation === 0) return arr;
//     for (let i = 0; i < rotation; i++) {
//         let ele = arr.pop();
//         arr.unshift(ele);
//     }
//     return arr;
// }
// console.log(rotationRight([1,3,4,2,4,5],60))

// let obj = { id: '1', name: "Hari", age: "12" };
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const arr = ['a', 'b', 'c', 'd', 'a', 'c', 'a'];
// const obj = {};
// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = obj[arr[i]] + 1 || 1;
// }
// let max = 0;
// let char = "";
// for (const item in obj) {
//     if (obj[item] > max) {
//         max = obj[item];
//         char = item;
//     }
// }
// console.log(char, max);


// function add(a,b){
//     return a+b;
// }
// function higherOrder(a, callback){
//     return callback(10,a);
// }
// console.log(higherOrder(10,add));

// let chars = ['Aa', 'Bb', 'Aa', 'Cb', 'Bb'];
// let ans = [];
// chars.forEach((value, index) => {
//     if(!ans.includes(value)){
//         ans.push(value);
//     }
// })
// console.log(ans);

// const obj = {};
// const ans = [];
// for (let i = 0; i < chars.length; i++) {
//     obj[chars[i]] = obj[chars[i]] + 1 || 1;
//     if (obj[chars[i]] === 1) ans.push(chars[i]);
// }
// console.log(ans);

//__________________________________
// Promise
console.log("Start");
function action(username,callback){
    setTimeout(() => {
        // console.log(username);
        callback(username);
    }, 0)

}
const message = action("Tushar",(message)=>{
    console.log(message);
})
console.log("end");
