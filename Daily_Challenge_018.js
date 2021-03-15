// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleSonAge = sonYearsOld * 2
    let dadAgeDifference = doubleSonAge - dadYearsOld
    
    if(dadAgeDifference >= 0){
      return dadAgeDifference
    }else if(Math.sign(dadAgeDifference) < 0){
      return Math.abs(dadAgeDifference)
    }
    }
