// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

function flatten(arr){
    //iterate through the array and concatinate the [] by one level
    return arr.reduce( (a, b) => a.concat(b),[])
    }
    flatten([])
    //flatten([[1,2,3],["a","b","c"],[1,2,3]])
    //flatten([1,2,3])