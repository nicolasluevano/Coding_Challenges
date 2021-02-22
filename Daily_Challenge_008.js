//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    //   let everyOther = []
    //  for(let i = 0; i < arr.length; i++){
    //    if(i % 2 !== 1){
    //      everyOther.push(arr[i])
    //    }
    //  }
    //  return everyOther
    
     let newNew = arr.filter((x,y) => {
       if(y % 2 !== 1){
        return x
       }
     })
    
     return newNew
    }
    removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])