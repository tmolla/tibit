import React, { Component } from "react";
import Card from "../components/Card";
import Tibit from "../components/Tibit";
import Footer from "../components/Footer";
import API from "../utils/API";
import {Col, Row, Container } from "../components/Grid";
//import { List } from "../components/List";
import Modal from "react-bootstrap/Modal"

class View extends Component {
  constructor(props, context) {
    super(props, context);
    
    //this.getAllTibits = this.getAllTibits.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSave = this.handleSave.bind(this)

    
    this.state = {
      tibits: [],
      show: false,
      search: false,
      query: '',
      id: '',
      action: "",
      goal: "",
      location: "",
      date: "",
      note: "",
      message: "Some message"
    };
  }

  componentDidMount() {
    //console.log('in mount')
    //console.log(this.state)
    this.getAllTibits();
  }

  handleClose() {
    this.setState(
      {
        show: false,
        search:false
      });
      console.log("In close")
    
    //this.getAllTibits();
  }

  handleShow = id => {
    //console.log("in show search state " + this.state.search )
    if(id){
      const tibit = this.state.tibits.find(tibit => tibit._id === id);
      this.setState({ 
        id: tibit._id,
        action: tibit.action,
        note: tibit.note,
        goal: tibit.goal,
        location: tibit.location,
        date: tibit.date,
        show:true,
        search:false
      });
    }else {
      this.setState(
        {
          show:true
        })
    }
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(name)
    // console.log(value)
  };

  handleTibitDelete = id => {
    const tibit = this.state.tibits.find(tibit => tibit._id === id);
    API.deleteTibit(tibit._id)
      .then(() => this.getAllTibits());
  };

  //handleTibitDisplayAll
  getAllTibits = () => {
    if (this.state.search) {
      this.setState({
        search:false,
        show:false
      })
      //console.log("Query string " + this.state.query)
      API.findTibits(this.state.query.trim())
      .then(res =>{
        // console.log("fiinding tibits")
        // console.log(res.data[0])
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
      })
    }else {
    API.getAllTibits()
      .then(res => {
        //console.log("getting all tibits")
        if (!(res.data.length === 0)) {
          this.setState({
            tibits: res.data,
          })
          //console.log(this.state.tibits)
        } else {
          this.setState({
            tibits: [],
            message: "Database is empty"
          })
        }
      })
      .catch((err) => {
        //console.log(err)
        this.setState({
          tibits: [],
          message: err.message
        })
      }
      );
  }}

  handleSearch = () => {
    //console.log("in handle Search ");
    this.setState({
      search:true,
      show:true
    })
    //this.getAllTibits()
  }

  handleSave = id => {
    const data ={
        action: this.state.action,
        goal: this.state.goal,
        location: this.state.location,
        date: this.state.date,
        note: this.state.note
    }
    //console.log(data);
    if (id) {
      API.updateTibit(id, data).then(() => this.handleClose());
    }else{
      API.createTibit(data).then(() => this.handleClose())
    }

  }; 

  render() {
    return (
      <div>
        <Container>
              <Card 
                  title="Tibits" 
                  icon="camera" 
                  NewTibitButton={() => (
                    <p
                      onClick={() => this.handleShow()}
                      className="text-danger d-inline m-2"
                    >
                      Add New Tibit
                    </p>
                  )}
                  SearchButton={() => (
                    <p
                      onClick={() => this.handleSearch()}
                      className="text-danger d-inline m-3"
                    >
                      Search for Tibit
                    </p>
                  )}
                  >
                {this.state.tibits.length ? (
                  <div className="card-columns">
                    {this.state.tibits.map(tibit => (
                      <Tibit
                        key={tibit._id}
                        id={tibit._id}
                        action={tibit.action}
                        goal={tibit.goal}
                        location={tibit.location}
                        note={tibit.note}
                        date={tibit.date}
                        //getAllTibits={this.getAllTibits.bind(this)}
                        UpdateButton={() => (
                          <p
                            onClick={() => this.handleShow(tibit._id)}
                            className="text-danger d-inline m-2"
                          >
                            Update
                          </p>
                        )}
                        DeleteButton={() => (
                          <p
                            onClick={() => this.handleTibitDelete(tibit._id)}
                            className="text-danger d-inline m-2"
                          >
                            Delete
                          </p>
                        )}
                      />
                    ))}
                  </div>
                ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
              </Card>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update tibit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* This is a form for search */}
                {this.state.search ? 
                  ( <form>
                      <div className="form-group">
                        <label htmlFor="Query">
                          <strong>search word</strong>
                        </label>
                        <input
                          className="form-control"
                          id="Title"
                          type="text"
                          value={this.state.query}
                          placeholder="Type word to search for in Tibits"
                          name="query"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="pull-right">
                        <button
                          onClick={this.getAllTibits}
                          type="submit"
                          className="btn btn-lg btn-danger float-right"
                        >
                          Submit
                        </button>
                      </div>
                  </form>
                  ) : (
                <form onSubmit={() => this.handleSave(this.state.id ? this.state.id : "")}>
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
                      value={this.state.note}
                      placeholder="Enter any detail about action (optional)"
                      name="note"
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
                  <button type="submit" className="btn btn-success float-right">Save</button>
                </form>
              )}
              </Modal.Body>
            </Modal>
        </Container>
        <Footer />
        </div>
    );
  }
}

export default View;
