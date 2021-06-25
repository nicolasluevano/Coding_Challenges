
//Shortest Word
function findShort(s){
    //turn string into substring in an array
    let shortest = s.split(' ')
    //return an array of substrings ordered by length
    let small = shortest.map( a => a.length)
    //return the array sorted from least to greatest substring length
    let shorty = small.sort( (a,b) => a - b)
    //return the first element in the array
    console.log(shorty[0])
    
    }
    findShort("bitcoin take over the world maybe who knows perhaps")