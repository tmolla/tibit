import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Alert from 'react-bootstrap/Alert'


class Home extends Component {
  state = {
    tibits: [],
    q: "",
    message: "Search For A Tibit To Begin!"
  };

  componentDidMount() {
    //this.findTibits();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state.q);
  };

  findTibits = () => {
    //console.log(this.state.q)
    if (this.state.q.trim()){
      API.findTibits(this.state.q)
        .then(res =>{
          //console.log("fiinding tibits")
          //console.log(res.data)
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
          //console.log("fiinding tibits catch")
        })

    } else {
      API.getAllTibits()
        .then(res =>{
          //"getting all tibits")
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

  handleTibitCreate = () => {
    API.createTibit({
      action: "Great Action" + Date(),
      goal: "Some Awesome Goal",
      location: "Someplace in Tucson",
      date: Date.now(),
      note: "This is a longer string"
    }).then(() => this.findTibits());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Tibit - Collect your action in one place!</strong>
              </h1>
              <h2 className="text-center">Never forget any action.</h2>
            </Jumbotron>
          </Col> 
        </Row> 
        <Row>
            <Alert variant="primary">
              <Alert.Heading>We need a Home page</Alert.Heading>
              <p>The Home page will be the first page one will see when they get to our site.
                It should be beautiful and usable. On this page we shoudl have some info that will keep the user informed.
              </p>
              <hr />
              <p className="mb-0">Who wants to be a hero and take this on?</p>
            </Alert>  
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
