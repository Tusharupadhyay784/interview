//How to detect an Array in JS?
console.log(typeof {}); // object
console.log(typeof []); // object

//method 1
console.log(Array.isArray([])) // true

// method 2
console.log([] instanceof Array); // true


//method 3
console.log(typeof (Object.prototype.toString(Array) ))

