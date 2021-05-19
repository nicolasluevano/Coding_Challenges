// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    let vowels = /[aeiouAEIOU]/g
    return str.replace(vowels,'')
  }