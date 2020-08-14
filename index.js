// Add your functions here
function map(arr, someFunc){
    let newArr= [];
    for(let i = 0; i < arr.length; i++){
        arr[i]; 
        newArr.push(someFunc(arr[i]));
    }
    return newArr
}


function reduce(arr, somefunc, startingPoint=0){
    for(let i = 0; i < arr.length; i++){
        somefunc(arr[i], memo)}
        return somefunc();
}
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