import React, { Component } from "react";
import Form from "../components/FormAdd";
//import Footer from "../components/Footer";
import {Container } from "../components/Grid";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class MyModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      somestuff: props.message ,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    return (
      <Container>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.somestuff}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form 
              handleInputChange = {this.props.handleInputChange}
              handleFormSubmit={this.props.handleFormSubmit}
            />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </Container>
    );
  }
}

export default MyModal;
