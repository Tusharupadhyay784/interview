// for-of and for-in are two different looping constructs in Javascripts

//for-of is used to iterate over the values in an iterable object,such as an array or a string. It allows you to access the values of the object directly, without having to use an index


//Here is an example of using for-of to loop over the charaters in a string

// const myName = "xmen"
// for(let x = 0; x < myName.length; x++){
//     console.log(myName[x]);
// }

// for (let char of myName) {
//     console.log("my characters ", char);
// }

// const num = [1, 2, 3, 4, 5, 65, 67, 7, 8];
// for (let c of num) {
//     console.log(c);
// }

// on the other hand,for-in is used to iterate over the enumerable properties of an object. It allows you to access the keys of the object, rather than the values

//Here is an example of using for-in to loop over the properties of an object


//for-of and for-in are two different looping constructrs in javascript object

//It's important to note that for-in will also iterate overany inherited properties of an object. If you only want to iterate over the object own properties, You can use Object.keys() or Object.entries() in combination with a for-of loop


// const object = { a: 1, b: 2, c: 3 };
// for(let key in object)console.log(key,"->",object[key]);
const arr = ["tushar", 1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3, 2];
for (let a in arr) console.log(a, arr[a]);

// for... of for [array,Map,Set,String] to iterate over values
// for... in for an array to iterate over a key
// for... in for objects to enumerate its (object's) properties
