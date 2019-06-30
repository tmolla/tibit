import React, {Component} from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import API from "../../utils/API";
import Modal from "react-bootstrap/Modal";
import "./style.css";


class Tibit extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    

    this.state = {
      tmp_note: props.note,
      DeleteButton: props.DeleteButton,
      id: props.id
    };
  }

  handleClose() {
    console.log(this.props)

    this.setState({ show: false, tmp_note:'' });
    
    this.props.getAllTibits();
    this.forceUpdate();
  }

  handleShow() {
    this.setState({ show: true, tmp_note: this.state.tmp_note });

  }

  handleSubmit = event => {
    event.preventDefault();
    var data ={
        //     action: this.state.action,
        //     goal: this.state.goal,
        //     location: this.state.location,
        //     date: this.state.date,
             note: this.state.tmp_note
    }
    console.log(data);
    API.updateTibit(this.state.id, data).then(() => this.handleClose());
  };
  
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log("name is " + name + "and value is " + value);
    this.setState({
      [name]: value
    });
  };

  // handleTibitDelete = id => {
  //   //const tibit = this.state.tibits.find(tibit => tibit._id === id);
  //   API.deleteTibit(id)
  //   .then(() => this.handleClose());
  //   console.log(id)
  // };

  render() {
    console.log(this.state,this.props)
    return (
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-12">
            <div className="btn-container">
              {/* <this.state.UpdateButton />*/}
              <this.state.DeleteButton /> 
              <button
                onClick={() => this.handleShow()}
                className="btn btn-success btn-sm ml-2"
              >
                Update
              </button>
              {/* <button
                onClick={() => this.handleTibitDelete(this.state.id)}
                className="btn btn-primary btn-sm ml-2"
              >
                Delete
              </button> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {this.props.action &&<p className="font-italic small">{this.props.action}</p>}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.props.note && <p className="font-italic small">{this.props.note}</p>}
            <br/>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
          </Col>
          <Col size="md-4">
            {this.props.goal && <p>{this.props.goal}</p>}
          </Col>
          <Col size="md-4">
            {this.props.location && <p>({this.props.location})</p>}
          </Col>
          <Col size="md-4">
            {this.props.date && <p>({this.props.date})</p>}
          </Col>
        </Row>
        {/* Below is a modal. It will only show when the state is set */}
        <Modal size="lg" show={this.state.show} >
          <Modal.Header closeButton>
            <Modal.Title>Update tibit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Action</label>
                <input type="textarea" className="form-control" id="action" name="action" value={this.state.action} onChange={this.handleChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll share your information with anyone who pays.</small>
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
                  value={this.state.tmp_note}
                  placeholder="Enter any detail about action (optional)"
                  name="tmp_note"
                  onChange={this.handleChange}
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
                      value={this.state.goal}
                      placeholder="Type your goal here (optional)"
                      name="goal"
                      onChange={this.handleChange}
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
                        value={this.state.location}
                        placeholder="Enter the location of action (optional)"
                        name="location"
                        onChange={this.handleChange}
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
                        id="Location"
                        type="date"
                        value={this.state.tmp_date}
                        placeholder="Enter the location of action (optional)"
                        name="date"
                        onChange={this.handleChange}
                        required
                      />
                  </div>          
                </Col>
              </Row>
              <button type="submit" className="btn btn-danger float-right">Submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </ListItem>
    );
  }
}

export default Tibit;