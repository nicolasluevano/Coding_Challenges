//you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arrOfNums = numbers.split(' ').map(Number)

    let highestNum = Math.max(...arrOfNums)
    let lowestNum = Math.min(...arrOfNums)

   return`${highestNum} ${lowestNum}`

    

    

}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")