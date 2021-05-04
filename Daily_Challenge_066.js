//Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
   
    let sorted = arr.sort((a, b) => a - b)
     let result = [sorted[0],sorted[sorted.length - 1]]
     return result  
     
   }