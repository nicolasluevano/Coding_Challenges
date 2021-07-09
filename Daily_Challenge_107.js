//Help the Fruit Guy
function removeRotten(bagOfFruits){

    //if null/undefined/0 return empty array
    if(!bagOfFruits){
      return []
    }else{
        //return an array that applies a function to each element that checks if an element contains the substring 'rotten'
      let result = bagOfFruits.map( a => {
          //if includes substring, remove 'rotten' from string and convert string to lowercase
          if(a.includes('rotten')){
              return a.substr(6).toLowerCase()
          }else{
              return a
          }
      })
      return result
    }
     
  }