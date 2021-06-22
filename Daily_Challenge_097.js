//Counting Array Elements

function count(array){

    let result = array.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1
        return obj
    }, {})
    
    return result
       
    
    }
    count(['a','a','b','b','b'])