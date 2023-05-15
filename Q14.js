//Objects in Javascripts
// const user = {
//     name: "Xmen",
//     age: 12
// }
// user.name = "Tushar"
// delete user.age // delete the property of object
// console.log(user);
//Question -- 2
// const func = (function (a) {
//     delete a; // only work upon objects
//     return a;
// })(5)
// console.log(func); // 5
// Question -- 3
// const user = {
//     name: "Xmen",
//     age: "12",
//     "Minato Namikaze": true
// }

// console.log(user['Minato Namikaze'])
// Question -- 4

// const property = "FirstName";
// const name = "Tushar";

// // let user = {};
// // user[property] = name
// const user = {
//     [property]:name
// }
// console.log(user);
// Question - 5
// for-in loop is for object
// for-of loop is for array
// // Question - 6
// const obj = {
//     a : '1',
//     b : '2',
//     a : '34'
// }
// console.log(obj)

// Question - 7
// const a = {};
// const b = { key: "A" };
// const c = { key: "C" };
// a[b] = 12; //a['[object Object]']
// a[c] = 34; // a['[object Object]']
// js cant put whole object inside into it rather it makes the object into string and put it into the a object
// console.log(a);
// console.log(a[b]);

// Question - 8
// const settings = {
//     username: "Xmen",
//     level: 10,
//     health: 90
// }
// const data = JSON.stringify(settings,['level','health']); //  in settings level and health will come into strings and no one will come rest
// console.log(data);
// Question - 9
// const shape = {
//     radius:10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter: ()=> 2 * Math.PI * this.radius
// }
// console.log(shape.diameter());
// console.log(shape.perimeter()); // this one is arrow function so in this function this keyword points to the global object not shape object it will give Nan

// Question - 10
// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });
// both have different memory spaces so the answer should false in both cases
// Question - 11
// let person = {name : "Xmen"};
// const member = [person];
// // person = null // this will not affect changes
// person.name = null // this will change the member[0]th location
// console.log(member);

// Question - 12
// const value = { number: 10 };
// const mult = (x = { ...value }) => {
//     x.number *= 2;
//     console.log(x);
// }
// mult();
// mult(); // here cloning is done so it will not affect the original value object
// mult(value); // here cloning is not done so it will affect the original value obejct
// mult(value);
// Question - 13
// function changeAgeandRef(person) {
//     person.age = 12;
//     person = {
//         name: "Xmen",
//         age: 123
//     }
//     return person;
// }
// const person1 = {
//     name: "dontRepeat",
//     age: 45
// }
// const person2 = changeAgeandRef(person1);
// console.log(person1); // age will be changed
// console.log(person2); // whole object will be changed


let arr = [1,2,3,4,34,345];
for(const index in arr){
    console.log(index)
}
for(const value of arr){
console.log(value);
}