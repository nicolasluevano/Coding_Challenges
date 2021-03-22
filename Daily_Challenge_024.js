// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.






function getCount(str) {
    var vowelsCount = 0;
    
    let letters = str.split('')
    console.log(letters)
    
    for(letter of letters){
        console.log(letter)
      switch(letter){
          case "a":
          vowelsCount += 1;
          break;

          case "e":
          vowelsCount += 1;
          break;

          case "i":
          vowelsCount += 1;
          break;

          case "o":
            vowelsCount +=1;
          break;

          case "u":
          vowelsCount += 1;
          break;
      }
    }
    
    console.log(vowelsCount);
  }

  getCount("o a kak ushakov lil vo kashu kakao")

