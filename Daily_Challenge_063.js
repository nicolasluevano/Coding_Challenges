// you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


function toJadenCase(str){

    let phrase = this.split(' ')
    let jadenCase = []
    
    for(let i = 0; i < phrase.length; i++){
        jadenCase.push(phrase[i].charAt(0).toUpperCase()+phrase[i].slice(1))
    }
    
    console.log(jadenCase.join(' '))
    
    }
    toJadenCase(`How can mirrors be real if our eyes aren't real`)