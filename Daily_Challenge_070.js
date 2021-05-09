// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

function paul(x){
    let total = 0
       for(let i = 0; i < x.length; i++){
         switch (x[i]){
             case "kata":
                 total += 5
                 break
               case "Petes kata":
                   total += 10
                   break
               case "life":
                   total += 0
                   break
               case "eating":
                   total += 1
                   break
         }
       }
       if(total < 40){
           return "Super happy!"
       }else if (total < 70 && total >= 40){
           return "Happy!"
       }else if (total < 100){
           return "Sad!"
       }else if (total >= 100){
           return "Miserable!"
       }
   }