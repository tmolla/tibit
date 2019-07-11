import React from "react";
import "./style.css";
// import ColorButton from "../Color";
// import Words from "../Wordslide"
import { Col, Row } from "../Grid";
import { Link } from "react-router-dom";

function Card({NewTibitButton, SearchButton, children }) {
  return (


<div class="ui grid this">

  <div class="sixteen wide stretched column">

    <div class="ui segment">
      <div className="card-body tibit-card">
        <Row>
        <Col size="md-4">
            <p className="user-welcome large">
            <Link className="nav-brand" to="/">
              TibiT
            </Link>
            </p>
            </Col>
            <Col size="md-4">
              <div class="ui massive buttons">  
                <NewTibitButton />
                <div class="or "></div>
                <SearchButton />
              </div>
              </Col>
          <Col size="md-4">
            <p className="user-welcome float-right large logout">
              <Link to="logout">Log Out</Link></p>
            </Col>
          </Row>

        <hr />
        {children}
      </div>
    </div>

  </div>



</div>

 
 
      
      
  
  );
}




export default Card;
