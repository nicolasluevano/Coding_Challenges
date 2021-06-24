//Sum of Minimums

function sumOfMinimums(arr){

    //iterate through all sorted arrays and return the first index of each sorted array
    let lowest = arr.map( (a) => {return a.sort((b,c) => b - c)[0]})

    //sum all the digits of lowest 
    let result = lowest.reduce( (a, b) => a + b)

    //print result of result
    result

}
sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])

//loop through array
//sort each sub array
//push the first element of each array to a new array
//return the sum of the first element in each array