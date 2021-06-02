// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x){
    let arr = x.split('')
    
    for(let i = 0; i < x.length; i++){
     arr[i] = +arr[i]
     if(arr[i] === 1){
         arr[i] = 0
     }else{
         arr[i] = 1
     }
    }
    return arr.join('')
    }