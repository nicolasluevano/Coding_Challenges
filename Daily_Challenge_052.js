// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
  
    let ay = 97
    let e = 101
    let eye = 105
    let o = 111
    let u = 117
    
  
      for(let i = 0; i < a.length; i++){
         if(a[i] === ay){
             a[i] = 'a'
         }else if(a[i] === e){
             a[i] = 'e'
         }else if(a[i] === eye){
             a[i] = 'i'
         }else if(a[i] === o){
             a[i] = 'o'
         }else if(a[i] === u){
             a[i] = 'u'
         }  
  }
    return a
    }