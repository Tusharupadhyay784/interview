console.log("Haribol")
Array.prototype.myfunc = function (callback) {
    let newArr = [];
    // this represent calling function array or outside array
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;

}
function square(x) { return x * x; }
let arr = [1,2,3,4,5];
arr = arr.myfunc(square);
console.log(arr);