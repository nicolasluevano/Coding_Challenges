//n this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start,end){

    let result = []

    for(let i = start; i <= end; i++){
      if(!i.toString().includes('5'))
      result.push(i)
    }
   return result.length
}
    

dontGiveMeFive(4,17)