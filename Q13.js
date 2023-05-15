// Online Javascript Editor for free
//Closure
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
// let cnt = 0;
// (function count(){
//     if(cnt === 0){
//         let cnt = 1;
//         console.log(cnt);
//     }
//     console.log(cnt);
// })();
// output--> 1,0
// function createBase(num){
//     return (num2)=>{
//         console.log(num+num2);
//     }
// }
// let addSix = createBase(6);
// addSix(10);
// addSix(12);

// function find(index){
//     let a = [];
//     for(let i = 0; i < 10000000; i++){
//         a[i] = i*i;
//     }
//     console.log(a[index]);
// }
// console.time("1");
// find(6);
// console.timeEnd('1');
// console.time("2")
// find(15)
// console.timeEnd("2")
// increasing effiecency using closure
// function find(){
//     let a = [];
//     for(let i = 0; i < 1000000; i++){
//         a[i] = i*i;
//     }
//     return (index)=>{
//         console.log(a[index]);
//     }
// }
// console.time("1");
// const time = find();
// time(12);
// console.timeEnd('1');

// console.time("2")
// time(35);
// console.timeEnd("2")

// make the variable private

    // function vary(){
    //     let _counter = 0;
    //     function increment(incre){
    //         _counter+=incre;
    //     }
    //     function retrieve(){
    //         console.log("Value is ",_counter);    
    //     }
    //     return {increment,retrieve};
    // }
    // const value = vary();
    // value.increment(10);
    // value.retrieve();
    // const sasori = vary();
    // sasori.increment(20);
    // sasori.retrieve();
    
// module pattern
// var module = (function(){
//     function private(){
//         console.log("I am private");
//     }
//     return {
//         publicMethod : function public(){
//             console.log("I am Public");
//             private();
//         }
//     }
// })()
// // module.private(); // cannot access the private method 
// module.publicMethod()  // can access the private method also

// function run once
function once(callback,context){
    let run;
    return function(){
        if(callback){
            run = callback.apply(context || this ,arguments);
            callback = null
        }
        return run;
    }
}

const hello = ()=>console.log("Haribol");
const fun = once(()=>hello());
fun();
fun();



