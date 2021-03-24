// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
 if(s.length % 2 === 0){
    return s.charAt((s.length - 1)/ 2 ) + s.charAt(s.length / 2)
} else if (s.length % 2 === 1){
    return s.charAt(Math.ceil((s.length -1)/ 2))
}
}