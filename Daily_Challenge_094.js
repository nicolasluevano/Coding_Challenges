// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.


function trouble(x,t){
    //iterate through the array
    for(let i = 0; i < x.length; i++){
        //check if sum of element and consecutive element are === target
        if(x[i] + x[ i + 1] === t){
            //if true, remove second i from original array
            x.splice(i+1, 1)
            //substract duplicate elements 
            i--
        }
    }
    return x
 }
 trouble([4, 1, 1, 1, 4],2)

//  Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

// All inputs will be arrays/nested arrays.
 function appendArrays (arr1, arr2){

    //combine both arrays using concat method
    let result = arr1.concat(arr2)
    result

}
appendArrays([1,2], [2,4])