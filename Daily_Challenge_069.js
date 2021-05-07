// One:
    // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
    // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

    //P given an array of non-empty integers
    //R all the values multiplied together
    //E [2,3,4,5] => 120

    //P 
    //iterate through the array
    //multiply each element 
    //return the result of all the elements multiplied

    function findProduct(arr){

        let result = arr.reduce((a,b) => a * b)
    
        result
    
        }
        findProduct([1,2,3,4])