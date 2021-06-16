//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).


function minValue(values){

    //sort array from least to greatest
    let sorted = values.sort((a,b) => a - b)
    sorted

    //return new array that returns first instance of each element by checking if first instance is equal to element index
    let result = sorted.filter((a,index) => sorted.indexOf(a) === index)

    //return array converted to integers
    return +result.join('')

}
minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])