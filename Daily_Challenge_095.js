//Clean up after your dog
function crap(x, bags, cap){


    //combine all arrays into one array 
    x = [].concat.apply([],x)
    
    //check if array contains 'D'
    if(x.includes('D')){
        console.log('Dog!!')
    }else{
    //filter out @ from array
    let filtered = x.filter( poo => poo === "@")
    //store length of poo in array
    let numOfPoo = filtered.length
    
    //check if poo will fit in bags
    if(numOfPoo <= cap){
        console.log('Clean')
    }else if(numOfPoo > cap){
        console.log('Cr@p')
    }
    }
    
    }
    crap([['_','_'], ['_','@'], ['D','_']], 2, 2)