//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

let compare = Math.min(numbers[0], numbers[1])
let compareTwo = Math.max(numbers[0], numbers[1])
  
  for(let i = 2; i < numbers.length; i++){
      if(numbers[i] < compare){
          compareTwo = compare
          compare = numbers[i]
      }else if(numbers[i] > compare && numbers[i] < compareTwo){
          compareTwo = numbers[i]
      }

  }
 
  return compare + compareTwo



  function sumTwoSmallestNumbers(numbers){

    let sortedNums = numbers.sort((a,b) => a - b)
    sortedNums
    
    if(sortedNums[0] === sortedNums[1]){
        return sortedNums[1] + sortedNums[2]
    }else{
        return sortedNums[0] + sortedNums[1]
    }
       
    
    }