// map,filter and reduce
// Polyfill for map();

// Array.map((num,i,arr)=>{})
// Array.prototype.myMap = function (callback) {
//     // let res = [];
//     // for (let i = 0; i < this.length; i++) {
//     //     res.push(callback(this[i], i, this));
//     // }
//     // return res;
//     let ans = []
//     // this means the parent array that means nums array
//     for (let i = 0; i < this.length; i++) {
//         ans.push(callback(this[i], i, this));
//     }
//     return ans;
// }
// const nums = [1, 2, 3, 4];
// console.log(nums.myMap(num => num * 2));

// Polyfill for filter
// Array.prototype.myFilter = function (callback) {
//     let ans = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) ans.push(this[i]);
//     }
//     return ans;
// }
// const nums = [1, 2, 3, 4];
// console.log(nums.myFilter(num => num % 2))

// PolyFill for Reduce
// arr.reduce((acc,curr,i,arr)=>{},initialValue)
// Array.prototype.myReduce = function (callback, initialValue = this[0]) {
//     let ans = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         ans = callback(ans, this[i], i, this);
//     }
//     return ans;

// }

// const nums = [1, 2, 3, 4];
// console.log(nums.myReduce((acc,curr,i,arr)=>{
//     return acc+curr
// },0));

// Questions based on it
// let students = [
//     { name: "Tushar", marks: 90 },
//     { name: "Xmen", marks: 40 },
//     { name: "Krsna", marks: 99 },
//     { name: "Gauranga", marks: 100 }
// ]

// const upperNames = students.map((element) => {
//     return element.name.toUpperCase();
// })
// console.log(upperNames);
// const morethan60 = students.filter((element) => {
//     if (element.marks > 60) return element;
// })
// console.log(morethan60);

// const sumofmarks = students.reduce((acc, curr, i, arr) => {
//     return acc + curr.marks
// }, 0)
// console.log(sumofmarks);

// const totalMarks = students.map((element) => {
//     if (element.marks < 60) {
//         element.marks += 20;
//     }
//     return element;
// }).filter((element) => {
//     return element.marks > 60;
// }).reduce((acc, curr) => {
//     return acc + curr.marks;
// }, 0)
// console.log(totalMarks);



