// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

function fizzbuzz(n){

    //create a loop that runs n times
    //if numbers is divisible by both 3 and 5 output "FizzBuzz"
    //if divisible by 5 output "Buzz"
    //if divisible by 3 output "Fizz"
    //else return the number

    //empty array to store numbers or string
    let solution = []
  

    //loop that runs n number of times starting at 1
    for(let i = 1; i <= n; i++){
           if( i % 5 === 0 && i % 3 === 0){
               //pushes to solution array
               solution.push("FizzBuzz")
           }else if( i % 5 === 0){
               //pushes to solution array
               solution.push("Buzz")
           }else if( i % 3 === 0){
               //pushes to solution array
               solution.push("Fizz")
           }else{
               //pushes to solution array
               solution.push(i)
           }
       }
     
       //return soltuion array
     return solution

}
fizzbuzz(10)