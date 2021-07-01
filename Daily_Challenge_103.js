//max-min arrays

function solve(arr){
    //array holding greatest and least elements
    let result = []

    //sorting orginal arr in descending order
    let sorted = arr.sort( (a,b) => a - b)
    //removes unsused iterations in for loop by 
    let sortedLength = sorted.length / 2
    
    //iterating through sorted array
    for(let i = 0; i < sortedLength; i++){
    console.log(i, {sorted})
    //splice and pushing the last element to result array
    result.push(sorted.splice(sorted.length-1, 1))
    //splice and push the first element to result array
    result.push(sorted.splice(0,1))
    }
    //push remaining elements to result array
    result.push(sorted)
    //concat invidual arrays to one array
    result = [].concat.apply([],result)
    //print result array
    console.log(result)
};

solve([1,6,9,4,3,7,8,2])