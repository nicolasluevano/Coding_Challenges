// What is the most asked question on CodeWars?

// Can someone explain /*...*/?

// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

function detect(comment) {
    let question = "Can someone explain"
    
     return comment.startsWith(question) ? true : false
   
   }