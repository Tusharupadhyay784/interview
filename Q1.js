// Find the Intersection and Union of the Array 
const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];


//Intersection
//o/p => 3,4,5
const intersectionArr = arr1.filter((currEle)=>{
    // check for common numbers
    return arr2.includes(currEle);
})
console.log(intersectionArr)

// Union 
const UnionArr = [...new Set([...arr1,...arr2])];
console.log(UnionArr)