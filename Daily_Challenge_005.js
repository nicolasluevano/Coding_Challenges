/////PROBLEM/////
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

/////SOLUTION/////

function fakeBin(x){
    let nums = x.split('')//changes string to array
    let newNew = []//empty array to store map results
    nums.map(num => 
    {
      if(num < 5){
        num = 0
        newNew.push(num)
      }else if(num >= 5){
        num = 1
        newNew.push(num)
      }
    })
    return newNew.join("")//turns array back to string
    }