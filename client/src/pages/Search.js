import React, { Component } from "react";
//import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Tibit from "../components/Tibit";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
//import Alert from 'react-bootstrap/Alert'

class Home extends Component {
  state = {
    tibits: [],
    q: "",
    message: "Search For A Tibit To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.q);
  };

  findTibits = () => {
    console.log(this.state.q)
    if (this.state.q.trim()){
      API.findTibits(this.state.q)
        .then(res =>{
          console.log("fiinding tibits")
          console.log(res.data)
          if (!(res.data.length === 0)){
            this.setState({
              tibits: res.data
            })
          }else {
            this.setState({
              tibits: [],
              message: "No Tibits Found Matching your Query, Try a Different phrase"
            })
          }
        })

        .catch((err) =>{
          this.setState({
            tibits: [],
            message: err.message
          })
          console.log("fiinding tibits catch")}
        )

    } else {
      API.getAllTibits()
        .then(res =>{
          console.log("getting all tibits")
          if (!(res.data.length === 0)){
            this.setState({
              tibits: res.data
            })
          }else {
            this.setState({
              tibits: [],
              message: "Database is empty"
            })
          }
        })

        .catch((err) =>
          this.setState({
            tibits: [],
            message: err.message
          })
        );
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.findTibits();
  };

  handleTibitDelete = id => {
    const tibit = this.state.tibits.find(tibit => tibit._id === id);
    API.deleteTibit(tibit._id)
    .then(() => this.findTibits());
  };

  handleTibitUpdate = id => {
    const tibit = this.state.tibits.find(tibit => tibit._id === id);

    API.updateTibit(tibit._id, {
      action: "Read the best book ever! " + Date()
    }).then(() => this.findTibits());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card title="Tibit Search" icon="far fa-search">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Search Results" icon="camera">
              {this.state.tibits.length ? (
                <List>
                  {this.state.tibits.map(tibit => (
                    <Tibit
                      key={tibit._id}
                      action={tibit.action}
                      goal={tibit.goal}
                      location={tibit.location}
                      date={tibit.date}
                      note = {tibit.note}
                      UpdateButton={() => (
                        <button
                          onClick={() => this.handleTibitUpdate(tibit._id)}
                          className="btn btn-success btn-sm ml-2"
                        >
                          Update
                        </button>
                      )}
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

export default Home;
