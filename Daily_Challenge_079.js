//https://www.codewars.com/kata/606efc6a9409580033837dfb/train/javascript

function plant(seed, water, fert, temp){
  

    let finalPlant = ''
  
      if(temp >= 20 && temp <= 30){
          finalPlant = "-".repeat(water) + seed.repeat(fert)
          return finalPlant.repeat(water)
      }
      else{
          finalPlant = "-".repeat(water*water) + seed
          return finalPlant
      }
  }