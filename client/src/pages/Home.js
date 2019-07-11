import React, { Component } from "react";
//import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
//import API from "../utils/API";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Reasons from "../components/Reasons";
import SubFooter from "../components/SubFooter";
//import {Link} from "react-router-dom"
class Home extends Component {
  
  render() {
    return (
      <div>
      <Nav />
      <div className="ui divided grid">
        <div className="sixteen wide column">
        <Intro />
       
        
        </div>
        <div className="sixteen wide column">
        <Video />
        </div>
          <div class="sixteen wide column">
          
          
        <Reasons />
          
        </div> 
        <div className="sixteen wide column center-align">
            
        <SubFooter />
            
        </div>
        
        <div className="sixteen wide column center-align">
        <Footer />
        
        </div>
      </div>
      </div>
    );
  }
}
export default Home;