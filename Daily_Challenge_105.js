//Smallest value of an array
function min(arr, toReturn) {
    //find the smallest number in the array
    let min = Math.min(...arr)
    
    //if 'value' return the value of smallest number
    if(toReturn === 'value'){
      return min
      //else return the index of the smallest number
    }else{
      return arr.indexOf(min)
    }
  }
  min([1,2,3,4,5], 'value')