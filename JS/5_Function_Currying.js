// function add(a, b) {
//     console.log(a + b);
// }
// // add(12,12);
// // let addwithtwo = add.bind(this, 2); //this refers to adjacent add function and 2 is a parameter which is a residing in add function

// // addwithtwo(13);//here 13 is parameter b
// let addwith2 = add.bind(this,2,3);
// addwith2();


function add(y){
    return function(x){
        console.log(x+y);
    }
}
let addwith2 = add(2);
addwith2(12);