function myLanguages(results){

    //return an array of results object
    return Object.entries(results)
    //sort object in descending order
    .sort( (a,b) => b[1]-a[1])
    //filter out elements that are >= 60
    .filter(el => el[1]>=60)
    //return the first index of each element
    .map(el => el[0])
    
    
    }
    myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})