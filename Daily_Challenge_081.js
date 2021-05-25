// Given a non-negative integer, return an array / a list of the individual digits in order.

function digitize(n) {
    let arr = n.toString().split('')
    
    let result = arr.map( a => +a)
    
    return result
    }