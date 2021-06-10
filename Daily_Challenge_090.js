// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.






function gordon(a){

    //convert to uppercase
    a = a.toUpperCase()
    //replace A with @
    .replace(/A/g,"@")
    //replace EIOU with *
    .replace(/[EIOU]/g,"*")
    
    //convert string to array
    let word = a.split(' ')
    
    //add !!!! to end of each word in array
    let result = word.map( a => `${a}!!!!`)
    //convert array back to string
    .join(' ')

    //print result
    return result

}
gordon('What feck damn cake')