// Flatten Array
let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8]],
    [10, 11, 12]
];
let ans = [].concat(...arr);
let ans2 = arr.flat(2); // Inbuilt Array
// console.log(ans);
// console.log(ans2);
function flatArray(ab, depth = 1) {
    let res = [];
    ab.forEach(element => {
        if (Array.isArray(element) && depth > 0) {
            res.push(...flatArray(element, depth - 1));
        }
        else{
            res.push(element);
        }
    });
    return res;
}
let a = flatArray(arr,2);
console.log(a);

