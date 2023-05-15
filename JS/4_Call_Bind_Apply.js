// let p1 = {
//     name: "Tushar",
//     age: 21,
//     showDetails: function () {
//         console.log(`I am ${this.name} and my age is ${this.age}`)
//     }
// }

// // p1.showDetails();
// let p2 = {
//     name: "X",
//     age: 22,
//     // showDetails: function () {
//     //     console.log(`I am ${this.name} and my age is ${this.age}`)
//     // }
// }
// // p2.showDetails();

// // function borrowing 
// p1.showDetails.call(p2); // this will call p1 function but having the values of p2 object this thing work done by call function

// ---------------------------------------------------------------
// make function globally so that no need to call function inside from a object
// let showDetails =  function () {
//     console.log(`I am ${this.name} and my age is ${this.age}`)
// }
// let p1 = {
//     name: "Tushar",
//     age: 21,
//     // showDetails: function () {
//     //     console.log(`I am ${this.name} and my age is ${this.age}`)
//     // }
// }
// // p1.showDetails();
// let p2 = {
//     name: "X",
//     age: 22,
//     // showDetails: function () {
//     //     console.log(`I am ${this.name} and my age is ${this.age}`)
//     // }
// }
// // p2.showDetails();

// // function borrowing 
// showDetails.call(p1);
// showDetails.call(p2);
// ---------------------------------------------------------------
// function with having arguements
let showDetails = function (city, car) {
    console.log(`I am ${this.name} and my age is ${this.age} and ${city} and ${car}`)
}
let p1 = {
    name: "Tushar",
    age: 21,
    // showDetails: function () {
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}
// p1.showDetails();
let p2 = {
    name: "X",
    age: 22,
    // showDetails: function () {
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}
// p2.showDetails();

// function having arguements borrowing 
showDetails.call(p1, "delhi", "Mustang");
showDetails.call(p2, "delhi", "Mustang");
showDetails.apply(p2, ['Delhi', 'MVC']) // second parameter should be given in the form of array
// what bind does... it binds the function with object and make another function and for looking to that function we have to store the value of a function because its returing it
let bindDetails = showDetails.bind(p1, 'Tushar', 'Delhi')
bindDetails()
