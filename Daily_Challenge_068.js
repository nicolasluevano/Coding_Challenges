//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

function binaryArrayToNumber(arr){
    let str = arr.join('')
    let binary = parseInt(str,2)
    return binary
    
  
  }
    
    binaryArrayToNumber([1,1,1,1]);