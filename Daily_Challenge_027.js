// square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    //may the code be with you
    let strOfNums = num.toString()
    let numArr = strOfNums.split('')
    
    let nums = ''
    
    for(arr of numArr){
     nums += Math.pow(arr,2)
    }
    return +nums
  
  }