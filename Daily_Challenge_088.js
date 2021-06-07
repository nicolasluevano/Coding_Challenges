 // you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

function gimmie(inputArray) {

    //copy of inputArray sorted from least to greatest
    let sorted = [...inputArray].sort((a,b) => a - b)

    //store the middle element of the sorted array
    let middleNum = sorted[1]
      
    //return the index of middleNum in the orginal array
    return inputArray.indexOf(middleNum)
  };
gimmie([2,3,1])


//sort the array from least to greatest
//store the index of the second element
//return the index of second sorted in the original array