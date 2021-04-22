//Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.



function wordToBin(str){
    let letters = str.split('')
    let binary = []
    
    for(let i = 0; i < letters.length; i++){
    binary.push(`0${str[i].charCodeAt(0).toString(2)}`)
    }
    return binary
    }
