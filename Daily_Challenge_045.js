// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n) {
  
    if(n === undefined){
        n = 1
    }else if(n > 5){
        n = 5
    }
      
    let newArr = []
    
    for(let i = 0; i <= n - 1; i++){
        newArr.push(arr[i])
    }
    return newArr
    
    }