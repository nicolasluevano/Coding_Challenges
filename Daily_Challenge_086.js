// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.






function removeSmallest(arr){
    
    //find the lowest number in array
    let lowest = Math.min(...arr)
    
    //Check that array is not empty
    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            //if element matches lowest
            if(arr[i] === lowest){
                //remove from array
                arr.splice(i, 1)
                //return array
                return arr
            }
        }
        }else{
            //return empty array if original array is empty
            return arr
    }
    
}
    removeSmallest([2,2,1,2,1])