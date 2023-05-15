//First Code
// console.log("First Approach")
// for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     });

// }

// second approach  
// console.log("Second Approach")
// for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
// }

// third approach
// console.log("Third Approach")
// for (var i = 0; i <= 5; i++) {
//     (function () {
//         var j = i;
//         setTimeout(function () {
//             console.log(j);
//         })
//     })()
// }

// Fourth Approach
// console.log("Fourth Approach")
// var k = 0;
// for (; k <= 5; k++) {
//     (function () {
//         var j = k;
//         setTimeout(() => {
//             console.log(j);
//         }, 1000);
//     })()
// }

// Fifth Appraoch
// console.log("Fifth Approach")
// let g = 0;
// for(; g <= 5; g++){
//     setTimeout(() => {
//         console.log(g);
//     }, 1000);
// }
// Sixth Apporach
// console.log("Sixth Apporach")
// let g = 0;
// for(; g<=5; g++){
//     (function(){
//         // let x = g;
//         var x = g;
//         setTimeout(() => {
//             console.log(x);
//         }, 1000);
//     })()
// }