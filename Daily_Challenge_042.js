// Create 2 functions:

// hypotenuse(), which takes 2 integer arguments, the length of two regular sides of a right triangle, and returns the length of the missing side, the hypotenuse, as a number.

// leg(), which takes 2 integer arguments, the first being the length of the hypotenuse, and the second being the length of a regular side of a right triangle. This function should return the length of the missing regular side, as a number.

function hypotenuse(a, b){
    let hyp = Math.sqrt(a**2 + b**2)
    return hyp  
    }
    
    function leg(c, a){
    let missingLeg = Math.sqrt(c**2 - a**2)
    return missingLeg
    }
        
    