let p1 = {
    name: "Xmen",
    age: 25,
}
let showDetails = function (city, address) {
    console.log(this.name + ' ' + this.age + ' ' + city + ' ' + address);
}
let showDetailsBind = showDetails.bind(p1,'Delhi','Rohini');
showDetailsBind();

Function.prototype.mybind = function(...args){
    let obj = this;
    return function(){
        obj.call(args[0]);
    }
}
let showDetailsMyBind = showDetails.mybind(p1,"Tushar","Xmen");
showDetailsMyBind();