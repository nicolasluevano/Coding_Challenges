// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8



function pipeFix(numbers){
  
    const firstNum = numbers[0]
     const lastNum = numbers[numbers.length-1]
     let nums = []
  
     for(let i = firstNum; i <= lastNum; i++){
      nums.push(i)
     }
     return nums
  }