import React, { Component } from "react";
//import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/FormAdd";
import Tibit from "../components/Tibit";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//import MyModal from "./MyModal"
//import Button from "react-bootstrap/Button"

class Add extends Component {
  constructor(props, context) {
    super(props, context);
    this.getAllTibits = this.getAllTibits.bind(this);
    this.state = {
      tibits: [],
      action: "",
      goal: "",
      location: "",
      date: "",
      note: "",
      message: "Some message"
    };
  }
  componentDidMount() {
    this.getAllTibits();
  }

  getAllTibits = () => {
    console.log(this)
    API.getAllTibits()
      .then(res => {
        console.log("getting all tibits")
        if (!(res.data.length === 0)) {
          this.setState({
            tibits: res.data,
          })
          console.log(this.state.tibits)
        } else {
          this.setState({
            tibits: [],
            message: "Database is empty"
          })
        }
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          tibits: [],
          message: err.message
        })
      }
      );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.action)
    API.createTibit({
      action: this.state.action,
      goal: this.state.goal,
      location: this.state.location,
      date: Date.now(),
      note: this.state.note
    }).then(() => {
      this.setState({
        tibits: [],
        action:"",
        note: "",
        goal: "",
        location: "",
        date: ""
      })
      this.getAllTibits()
    });
  };

  handleTibitDelete = id => {
    const tibit = this.state.tibits.find(tibit => tibit._id === id);
    API.deleteTibit(tibit._id)
      .then(() => this.getAllTibits());
  };


  render() {
    console.log("asda")
    return (

      <Container>
        <Row>
          <Col size="md-12">
            <Card className="mb-5" title="Tibit Add" icon="far fa-add">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                action = {this.state.action}
                note = {this.state.note}
                goal = {this.state.goal}
                location = {this.state.location}
                date = {this.state.date}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Added Tibits" icon="camera">
              {this.state.tibits.length ? (
                <List>
                  {this.state.tibits.map(tibit => console.log("map") || (
                    <Tibit
                      key={tibit._id}
                      id={tibit._id}
                      action={tibit.action}
                      goal={tibit.goal}
                      location={tibit.location}
                      note={tibit.note}
                      date={tibit.date}
                      getAllTibits={this.getAllTibits.bind(this)}
                      DeleteButton={() => (
                        <button
                          onClick={() => this.handleTibitDelete(tibit._id)}
                          className="btn btn-primary btn-sm ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Add;
