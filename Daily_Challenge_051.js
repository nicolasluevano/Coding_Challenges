//Use the filter functionality to complete the function given.

//The solution would work like the following:

//getEvenNumbers([2,4,5,6]


function getEvenNumbers(numbersArray){
    let numbers = numbersArray.filter(number => number % 2 === 0)
    return numbers
  }