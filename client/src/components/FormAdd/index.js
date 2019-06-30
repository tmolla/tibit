import React from "react";
import { Col, Row} from "../Grid"

function FormAdd({action, note, goal, location, date, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label>
          <strong>Action</strong>
        </label>
        <input
          className="form-control"
          id="Action"
          type="text"
          value={action}
          placeholder="Enter you action (mandatory)"
          name="action"
          onChange={handleInputChange}
          required
        />
      </div>   
      <div className="form-group">
        <label>
          <strong>Note</strong>
        </label>
        <input
          className="form-control"
          id="Note"
          type="textarea"
          rows="2"
          value={note}
          placeholder="Enter any detail about action (optional)"
          name="note"
          onChange={handleInputChange}
        />
      </div>
      <Row>
        <Col size="md-4"  >
          <div className="form-group">
            <label>
              <strong>Goal</strong>
            </label>
            <input
              className="form-control"
              id="Goal"
              type="text"
              value={goal}
              placeholder="Type your goal here (optional)"
              name="goal"
              onChange={handleInputChange}
              required
            />
          </div>
        </Col>
        <Col size="md-4">
          <div className="form-group">
              <label>
                <strong>Location</strong>
              </label>
              <input
                className="form-control"
                id="Location"
                type="text"
                value={location}
                placeholder="Enter the location of action (optional)"
                name="location"
                onChange={handleInputChange}
                required
              />
          </div>          
        </Col>
        <Col size="md-4">
          <div className="form-group">
              <label>
                <strong>Date</strong>
              </label>
              <input
                className="form-control"
                id="Date"
                type="date"
                value={date}
                placeholder="Enter the location of action (optional)"
                name="date"
                onChange={handleInputChange}
                required
              />
          </div>          
        </Col>
      </Row>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormAdd;
