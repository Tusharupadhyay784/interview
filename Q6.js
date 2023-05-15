let arrName = [
    {
        name: "X",
        pass: "password"
    },
    {
        name: "Y",
        pass: "passwordY"
    }
]
console.log(arrName.indexOf({
    name: "Y",
    pass: "passwordY"
}))  // answer ---> -1
//In javascript object is not equall at any circumstance because object is act as pass by reference not pass by value 

let a = {};
let b = a;
let c = {};

console.log(a === b); // true
console.log(a === c); // false
