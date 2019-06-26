import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ action, goal, date, location, CreateButton, DeleteButton, UpdateButton }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        {/* <Col size="md-6">
          <h3 className="font-italic">{goal}</h3>
          {goal && <h5 className="font-italic">{goal}</h5>}
        </Col> */}
        <Col size="md-12">
          <div className="btn-container">
            <CreateButton />
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
        <Col size="md-4">
          <p>{goal}</p>
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

export default Book;
