// // setInterval Polyfills
// function createSetInterval() {
//     let intervalID = 0;
//     let intervalMap = {}

//     function setIntervalPolyfill(callback, delay = 0, ...args) {
//         var id = intervalID++;
//         function repeat() {
//             intervalMap[id] = setTimeout(() => {
//                 callback(...args)
//                 if (intervalMap[id]) {
//                     repeat();

//                 }
//             }, delay);

//         }
//         repeat();
//         return id;
//     }

//     function clearIntervalPolyfill(intervalID) {
//         clearTimeout(intervalMap[intervalID]);
//         delete intervalMap(intervalID);
//     }

//     return {
//         setIntervalPolyfill,
//         clearIntervalPolyfill
//     }
// }
// const {
//     setIntervalPolyfill,
//     clearIntervalPolyfill
// } = createSetInterval


// let counter = 0;
// let intervalId;
// function greeting() {
//     counter++;
//     console.log("xmen");
//     if (counter >= 3) {
//         clearIntervalPolyfill(intervalId);
//     }
// }
// intervalId = setIntervalPolyfill(greeting, 2000);

function createSetInterval() {
    let intervalID = 0;
    let intervalMap = {};

    function setIntervalPolyfill(callback, delay = 0, ...args) {
        var id = intervalID++;
        function repeat() {
            intervalMap[id] = setTimeout(() => {
                callback(...args);
                if (intervalMap[id]) {
                    repeat();
                }
            }, delay);
        }
        repeat();
        return id;

    }

    function clearIntervalPolyfill(intervalID) {
        clearTimeout(intervalMap[intervalID])
        delete intervalMap[intervalID];
    }


    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }

}





const {
    setIntervalPolyfill,
    clearIntervalPolyfill } = createSetInterval()


let count = 0;
let intervalId;
function greet() {
    count++;
    console.log("Hii");

    if (count >= 3) {
        clearIntervalPolyfill(intervalId);
    }
}
intervalId = setIntervalPolyfill(greet, 2000)