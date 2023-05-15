// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let s1 = "hello";
let s2 = "llohe";

let obj = {};
let isAna = false;
function anagraam(s1,s2){
    if(s1.length != s2.length)return false;
    else{
        for(let i = 0; i < s1.length; i++){
            obj[s1[i]] = (obj[s1[i]] || 0) + 1;
        }
        for(let i = 0; i < s2.length; i++){
            obj[s2[i]] = (obj[s2[i]] || 0) - 1;
        }
        for(let items of s1){
            if(obj[items] > 0)return false;
        }
        return true;
    }
}
console.log(anagraam(s1,s2));
