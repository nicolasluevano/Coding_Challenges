
//Double Trouble
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

 //Array Appender
//  Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

// All inputs will be arrays/nested arrays.
 function appendArrays (arr1, arr2){

    //combine both arrays using concat method
    let result = arr1.concat(arr2)
    result

}
appendArrays([1,2], [2,4])


//Even numbers in an array
//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, number){
    //filter all even numbers from array
    let evens = array.filter( a => a % 2 === 0)

    //remove given number of elemens from array
    let result = evens.slice(- number)
    result
}
//evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)
