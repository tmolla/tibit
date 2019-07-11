import React from "react";
import "./style.css"

function SubFooter() {
  return (
   <div className="subfooter">

<div class="ui basic segment">
<h3 className="features"> FEATURES </h3>

<table class="ui four column doubling stackable grid">
  
    <div class="column">

    <i class="big plus icon"></i><i class=" big pencil alternate icon"></i><i class="big trash alternate outline icon"></i>
    
    <h4>Create Update & Delete</h4>
    <p>Enter an action and make it official</p>
   
    </div>
    <div class="column">

      <i class="big check circle outline icon"></i>
      
      <h4>You Goal Digger, You</h4>
      <p>Dated to track and tackle your goals</p>

    
    </div>
    
    <div class="column">

      <i class="big search icon"></i>
      
      <h4>Keep Track</h4>
      <p>Search through and find using any keyword </p>
  
   
    </div>
    <div class="column">

      <i class="big paint tint icon"></i>
      
      <h4>Splash of Color</h4>
      <p>Click tint icon & change color</p>
  
   
    </div>
  </table>

</div> 
       
    </div>
  );
}

export default SubFooter;