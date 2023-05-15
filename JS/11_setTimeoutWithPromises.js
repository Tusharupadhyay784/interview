//Create a SetTimeout With Promises
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
delay(2000).then(()=>console.log("Run after 1 seconds"))