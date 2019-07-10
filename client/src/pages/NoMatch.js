import React from "react";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import pencil from "../pages/404file/BrokenPencil-Blue.jpg";
import "./404file/nomatch.css";


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          
          <div class="column">
          
            <h1 className="text-center">Oops!</h1>         
            <img class="ui medium image" src= {pencil} ></img>
            </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;