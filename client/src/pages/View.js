import React, { Component } from "react";
import Card from "../components/Card";
import Tibit from "../components/Tibit";
//import Footer from "../components/Footer";
import API from "../utils/API";
//import {Col, Row, Container } from "../components/Grid";
import {Col, Row} from "../components/Grid";
import store from "../store"
import Modal from "react-bootstrap/Modal";

class View extends Component {
  constructor(props, context) {
    super(props, context);
    
    //this.getAllTibits = this.getAllTibits.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)

    
    this.state = {
      tibits: [],
      show: false,
      search: false,
      query: '',
      id: '',
      action: "",
      // goal: "",
      //location: "",
      // note: "",
      date: "",
      color:"",
      userId:store.getState().auth.user.id,
      message: "",
      allColors:[
        "rgb(84, 131, 233)",
        "rgb(84, 199, 119)",
        "rgb(190, 10, 190)",
        "rgb(230, 156, 38)",
        "rgb(224, 222, 89)"
      ],
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
        color:tibit.color,
        //location: tibit.location,
        date: tibit.date,
        userId:store.getState().auth.user.id,
        show:true,
        search:false
      });
      console.log("handle show color " + this.state.color)
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
    console.log("Name " + name)
    console.log("value " + name)

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
      

      API.findTibits(this.state.query.trim(), this.state.userId)
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
    API.getAllTibits(this.state.userId)
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
    console.log("In save color: " + this.state.color)
    //console.log(data);
    if (id) {
      const savedata ={
        action: this.state.action,
        color:(id ? this.state.color:""),
        date: this.state.date,
        owner:this.state.userId,
    }
      API.updateTibit(id, savedata).then(() => this.handleClose());
    }else{
      const newdata ={
        action: this.state.action,
        date: this.state.date,
        owner:this.state.userId,
    }
      API.createTibit(newdata).then(() => this.handleClose())
    }

  }; 

  handleColorChange = (id, color) => {
    console.log("In save color: " + color)
    console.log("id " + id)
    const data ={
        color:color,
    }
    API.updateTibit(id, data).then(() => {
      console.log("Saved color")
    });
  }



  render() {
    return (
      <div>
        {/* <Container> */}
            <Card 
                // title="TibiTs" 
                // icon="" 
                NewTibitButton={() => (
                  <button
                    onClick={() => this.handleShow()}
                    className=" blue ui button"
                  >
                    <i className="plus icon"></i>
                  </button>
                )}
                SearchButton={() => (
                  <button
                    onClick={() => this.handleSearch()}
                    className="ui positive button"
                  >
                    <i className="search icon"></i>
                  </button>
                )}
                >
              {this.state.tibits.length ? (
                <div className="card-columns">
                  {this.state.tibits.map(tibit => (
                    <Tibit
                      key={tibit._id}
                      id={tibit._id}
                      action={tibit.action}
                      //goal={tibit.goal}
                      //location={tibit.location}
                      //note={tibit.note}
                      color={tibit.color}
                      date={tibit.date}
                      //getAllTibits={this.getAllTibits.bind(this)}
                      HandleColors={this.handleColorChange}
                      UpdateButton={() => (
                        <p
                          onClick={() => this.handleShow(tibit._id)}
                          className="text-danger d-inline m-2"
                        >
                          <i className="inverted edit icon"></i>
                        </p>
                      )}
                      DeleteButton={() => (
                        <p
                          onClick={() => this.handleTibitDelete(tibit._id)}
                          className="text-danger d-inline m-2"
                        >
                          <i className="inverted trash alternate outline icon"></i>
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
                    <div className="form-group ui form">
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
                {/* <div className="form-group">
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
                </div> */}
                <Row>
                  {/* <Col size="md-4"  >
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
                  </Col> */}
                  {/* <Col size="md-6">
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
                  </Col> */}
                  <Col size="md-4">
                    <div className="form-group">
                        <label>
                          <strong>Date</strong>
                        </label>
                        <input
                          className="form-control"
                          id="date"
                          type="date"
                          value={this.state.tmp_date}
                          placeholder="Enter the date of action (optional)"
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
      </div>
    );
  }
}

export default View;