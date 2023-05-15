//checking sum zero
// const arr = [-5,-4]
let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8]],
    [10, 11, 12]
];
function flatten(arr, depth = 1) {
    let ans = [];
    arr.forEach((value, index) => {
        if (Array.isArray(value) && depth > 0) {
            ans.push(...flatten(value, depth - 1));
        }
        else {
            ans.push(value);
        }
    })
    return ans;
}
console.log(flatten(arr, 2));