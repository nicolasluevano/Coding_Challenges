// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.








function dbSort(a){

    //create array that sorts if type is a number
    let num = a.filter( a => typeof a == 'number').sort((a,b) => a - b)

    //create array that sorts if type is a string
    let letter = a.filter( a => typeof a == 'string').sort()

    //combine both arrays
     console.log(num.concat(letter))
    }
    // dbSort([6, 2, 3, 4, 5])
    //dbSort([14, 32, 3, 5, 5])
    dbSort(["Banana", "Orange", "Apple", "Mango", 14, 32, 3])