//Insert dashes

function insertDash(num){

    //convert integers to string then split into array
    let arr = String(num).split('')
    //create empty array to hold extracted elements
    let result = []
    //iterate through array
    for(let i = 0; i < arr.length; i++){
        //create condition if element is odd and following element is odd, push element + '-' to result array
        if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1){
            result.push(`${arr[i]}-`)
            //if fails condition, push the element to array
        }else{
            result.push(arr[i])
        }
    }
    //converty array back into string using join
    console.log(result.join(''))
}
insertDash(454793)

//convert int to string
//convert integers into an array
//iterate through array
//if element is odd num and following element is odd, add '-' in between