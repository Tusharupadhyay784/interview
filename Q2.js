//The nullsih coalescing operator (??) is a javascript operator that is used to provide a default vlaue for a variable that may be nmull or undefined
//In javascript , The Following values are considered falsy: false,0,'',(an empty string), null, undefined and NaN;

let myVal = null; // when null and undefined values there 10 value will be printed on mynumber2
const myNumber = myVal || 10;
const myNumber2 = myVal ?? 10;
console.log("mynumber ", myNumber)
console.log("mynumber2 ", myNumber2)