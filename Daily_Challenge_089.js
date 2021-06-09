// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.


function sortByLength(array) {

    //sort elements of array from least to greatest by length of each element
    let sorted = array.sort((a,b) => a.length - b.length)
    
    //return sorted array
    sorted
}
sortByLength(["Beg", "Life", "I", "To"])