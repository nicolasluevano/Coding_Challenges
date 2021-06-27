//Largest Elements

function largest(n, xs){

    //condition checking if n is = 0
    if(n == 0){
        return []
      }else{
          //sort array ascending order
        let sorted = xs.sort( (a,b) => a - b)
        //slice the last n elements in the array
        return sorted.slice(-n)
      }   
    }
largest(2,[7,6,5,4,3,2,1])



//sort array in descending order
//return the first num elements in the array