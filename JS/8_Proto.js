let p1 = {
    name: "Xmen",
    age: 12,
    showDetails: function () {
        console.log(this.name + " " + this.age);
    }
}
let p2 = {
    name: "Xmen2"
}

p2.__proto__ = p1; // proto is for sharing some other object properties
console.log(p2.name + " " + p2.age);
p2.showDetails();
