//Spacify

function spacify(str){
    //convert string into array
    //convert elements into a string with added space after each element
    return str.split('').join(' ')
}
spacify('hello world')