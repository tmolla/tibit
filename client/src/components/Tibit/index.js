import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";


function Tibit({ action, goal, date, location, note, DeleteButton, UpdateButton }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
          <div className="btn-container">
            <UpdateButton />
            <DeleteButton />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p className="font-italic small">{action}</p>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        {note && <p className="font-italic small">{note}</p>}
        <br/>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <hr />
        </Col>
        <Col size="md-4">
          {goal && <p>{goal}</p>}
        </Col>
        <Col size="md-4">
          {location && <p>({location})</p>}
        </Col>
        <Col size="md-4">
          {date && <p>({date})</p>}
        </Col>
      </Row>
    </ListItem>
  );
}

export default Tibit;
