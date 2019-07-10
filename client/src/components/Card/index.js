import React from "react";
import "./style.css";
import ColorButton from "../Color";
import Words from "../Wordslide"
import { Link } from "react-router-dom";

function Card({ icon, title, NewTibitButton, SearchButton, children }) {
  return (


<div class="ui grid this">

  <div class="sixteen wide stretched column">

    <div class="ui segment">
      <div className="card-body tibit-card">
      <p className="float-right large logout">Log Out</p>
        <p className="user-welcome large">
        <Link className="nav-brand" to="/">
          TibiT
        </Link>
        </p>
      <div class="ui massive buttons">  
           <NewTibitButton />
           <div class="or"></div>
          <SearchButton />
        </div>
        <hr />
        {children}
      </div>
    </div>

  </div>



</div>

 
 
      
      
  
  );
}




export default Card;
