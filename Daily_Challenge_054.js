
//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.






function switcheroo(x){
    let letters = x.split('')
  for(let i = 0; i < letters.length; i++){
      if(letters[i] === "a"){
          letters[i] = "b"
      }else if(letters[i] === "b"){
          letters[i] = "a"
      }
  }
  return letters.join('')
  
  }