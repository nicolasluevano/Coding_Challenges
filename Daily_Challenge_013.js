//Object Oriented Piracy


function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt= function(){
   if (draft -crew*1.5>20) return true; 
   else 
   { return false;} 
   };
   }