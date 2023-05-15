let myFunction = (function () {
    let name = "" // private variables
    getName = function () {
        return name;
    }
    setName = function (newName) {
        name = newName;
    }
    return {
        getName: getName,
        setName: setName
    }


})();

// myFunction.setName("Xmen");
// console.log(myFunction.getName());
console.log(myFunction.name)