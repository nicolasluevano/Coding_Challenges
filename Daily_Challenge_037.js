// Given an integral number, determine if it's a square number:






const isSquare = function(n){
    return Math.sqrt(n) % 1 === 0 ? true : false
   }