//return the missing element
//Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
//Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.


function getMissingElement(superImportantArray){

    //sort original array
    superImportantArray = superImportantArray.sort()
    
    //create 0-9 in array as benchmark
    let sortedArray = [0,1,2,3,4,5,6,7,8,9]

    //filter sorted array to return the element that is not included in original array
    let missing = sortedArray.filter( e => !superImportantArray.includes(e))

    //print missing number as an integer
    console.log(+missing.join())   
}
getMissingElement( [0,5,1,3,2,9,7,6,4])

//Lost number in number sequence
function findDeletedNumber(arr, mixArr){

    //sort mixed array
    mixArr = mixArr.sort()
    
    //filter out the number than is not in the mixed array
    let deleted = arr.filter( e => !mixArr.includes(e))

    //print number 
    console.log(+deleted.join())

}
findDeletedNumber([1,2,3,4,5],[3,4,1,5])


//Convert an array of strings to an array of numbers

function toNumberArray(stringarray){

    //iterate through each element in array and turn from string to integer
   let arr = stringarray.map( e => +e)
   //print new array
   arr
}
toNumberArray(["1","2","3"])