    // Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    // The output should be two capital letters with a dot separating them.

    // It should look like this:

    // Sam Harris => S.H




function abbrevName(name){
    const names = name.split(' ')
    const initials = []
    
    names.forEach(a => initials.push(a[0]))
    
    console.log(initials.join('.'))
    }
    abbrevName("Sam Harris")