//Add the isUpperCase method to String to see whether the string is ALL CAPS

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString()
  
  } 

"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
