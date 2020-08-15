// Add your functions here
function map(arr, someFunc){
    let newArr= [];
    for(let i = 0; i < arr.length; i++){ 
        newArr.push(someFunc(arr[i]));
    }
    return newArr
}

function reduce(arr, somefunc, startingPoint){
    let memo = startingPoint ? startingPoint : arr[0];
    let i = startingPoint ? 0 : 1
    for(; i < arr.length; i++){                                                                                               
        memo = somefunc(arr[i], memo)
    }
        return memo;
}
