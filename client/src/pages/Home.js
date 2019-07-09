import React, { Component } from "react";
import Footer from "../components/Footer";
import API from "../utils/API";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Reasons from "../components/Reasons";
import SubFooter from "../components/SubFooter";
//import {Link} from "react-router-dom"

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
      <div className="ui divided grid">

        <div className="sixteen wide column">

        <Intro />
       
        
        </div>

        <div className="sixteen wide column">

        <Video />

        </div>

          <div class="sixteen wide column">
          
          
        <SubFooter />
          
        </div> 
        <div className="sixteen wide column center-align">
            
        <Reasons />
            
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Home;
