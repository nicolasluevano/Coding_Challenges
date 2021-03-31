// Create a function hat takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

function toTime(seconds) {
      let hours = Math.floor(seconds / 3600)
        let minsDivisor = seconds % (3600)
        let mins = Math.floor(minsDivisor / 60 )
    
    
        return `${hours} hour(s) and ${mins} minute(s)`
    }