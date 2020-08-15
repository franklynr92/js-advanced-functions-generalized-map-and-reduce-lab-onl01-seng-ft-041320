// Add your functions here
function map(arr, someFunc){
    let newArr= [];
    for(let i = 0; i < arr.length; i++){
        arr[i]; 
        newArr.push(someFunc(arr[i]));
    }
    return newArr
}

// function reduceToTotal(sourceArray, startingPoint = 0){
//     let total = startingPoint ; 
//     for (let i = 0; i < sourceArray.length; i++){
//     total = total + sourceArray[i];
//     }
//     return total
// }


function reduce(arr, somefunc, startingPoint){
    let memo = startingPoint ? startingPoint : arr[0];

    let i = startingPoint ? 0 : 1
    for(; i < arr.length; i++){
        memo = somefunc(arr[i], memo)
    }
        return memo;
}

// function reduce(arr, callback, start) {
//     let accumulator = start ? start : arr[0];
//     let i = start ? 0 : 1;
  
//     for (; i < arr.length; i++) {
//       accumulator = callback(arr[i], accumulator);
//     }

//     return accumulator;
// }
// function reduceToAllTrue(sourceArray){
//     for (let i = 0; i < sourceArray.length; i++){
//         if (!sourceArray[i]){ 
//             return false
//         }
//     }
//     return true
// }

// function reduceToAnyTrue(sourceArray){
//     for (let i = 0; i < sourceArray.length; i++){
//         if (!!sourceArray[i]){ 
//             return true
//         }
//     }
//     return false
// }