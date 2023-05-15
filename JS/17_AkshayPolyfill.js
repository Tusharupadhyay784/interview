let name = {
    firstName: "Xmen",
    lastName: "Hari"
}
let printName = function (hometown,home2) {
    console.log(this.firstName, ' ', this.lastName, ' ', hometown, ' ', home2);
}

let printMyName = printName.bind(name, "Delhi","Xmend2");
printMyName();
// printName.call(name);

Function.prototype.mybind = function (...args) {
    // this--> printName
    let obj = this;
    params = args.slice(1); // except 0th element give all of them
    return function (...args2) {
        obj.apply(args[0],[...params,...args2])
    }
}

let printMyName2 = printName.mybind(name, "Minato");
printMyName2("seconds");