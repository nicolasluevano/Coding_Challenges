// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let noGeese = birds.filter(bird => !geese.includes(bird))
    return noGeese
  };