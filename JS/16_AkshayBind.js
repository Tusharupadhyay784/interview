let name = {
    firstName: "Xmen",
    lastName: "X",
    printFullName: function () {

    }
}
let printFullName = function (home) {
    console.log(this.firstName + " " + this.lastName + " " + home)
}
// name.printFullName();

let name2 = {
    firstName: "Xmen2",
    lastName: "Minato"
}
//function borrowing
//call ---> function name and for whom we are calling that one comes 
printFullName.call(name2, "Delhi"); // home is Delhi parameter
printFullName.call(name);

//apply method

printFullName.apply(name, ["Tushar"]) // in apply we give list instead of simple strings
printFullName.apply(name2, ["Japan"])


// bind method

let printMyName = printFullName.bind(name2, "Maharashtra") // return the function
printMyName(); // returns a function from bind method
//call vs bind 
// bind makes a copy instead of calling directly where as call directly call the function bind returns a function which we can invoke after wards 