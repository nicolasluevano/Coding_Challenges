//Stanton measure

function stantonMeasure(array){


    //filter out array element that is equal to 1
    //return length of n array
    let n = array.filter( a => a === 1).length
    
    //filter out array element that is equal to n
    //return length of stanton array
    let stanton = array.filter( b => b === n).length
    
    //print stanton
    return stanton
    
    }
    stantonMeasure([1,4,3,2,1,2,3,2])