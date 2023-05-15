function car(brand, model, color) {
    this.Brand = brand
    this.Model = model
    this.Color = color
}
let c1 = new car("BMW", 'X5', 'White'); // this->{}
console.log(c1);