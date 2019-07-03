import React from "react";
import "./style.css"

function SubFooter() {
  return (
   <div className="subfooter">

<div class="ui segment">

<div class="ui three column very relaxed grid">
    <div class="column four">

   
    </div>
    <div class="column five">

    <h3>Features </h3>
  
    </div>

    <div class="column six">

  
   
    </div>
  </div>

  <div class="ui three column very relaxed grid">

    <div class="column one">

      <h3>Staying Organized</h3>

      <img src="/Images/thoughts.jpeg" class="ui medium rounded image" width="500"></img>
      
      
    </div>
    <div class="column two">

    <h3>Make ideas happen</h3>

    <video src="/Images/ideamen.MP4" class="ui medium rounded image" width="500" autoPlay loop></video>
      
    </div>

    <div class="column three">

    <h3>TibiT Tips n Tricks</h3>

    <img src="/Images/images7.jpeg" class="ui medium rounded image" width="500" ></img>
      
    </div>
  </div>


</div> 
       
    </div>
  );
}

export default SubFooter;