    // Color Ghost
    // Create a class Ghost

    // Ghost objects are instantiated without any arguments.

    // Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated







var Ghost = function() {
    // your code goes here
      let colors = ["white", "yellow", "purple", "red"]
      let randomColor = Math.floor(Math.random() * colors.length)
  
      this.color = colors[randomColor]
   
  };
  
  
  let ghost = new Ghost()
  console.log(ghost.color)

