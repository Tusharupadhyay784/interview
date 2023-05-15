//composition Array
function add(a) {
    return a + 5;
}
function subtract(a) {
    return a - 2;
}
function multiply(a) {
    return a * 10;
}


const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args);
    }
}


const eval = compose(add, subtract, multiply);
console.log(eval(3));