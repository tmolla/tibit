import React from "react";
//import { useSpring, animated } from "react-spring";
import "./style.css";
import Words from "../Wordslide"


function Intro(){

  return (

    <div className="image-slider">
    <h1> T i b i T</h1>
    <h2>A simple note taking app for _________ </h2> <Words />
    <h4>Create A Free Account</h4>
    </div>
  )

}

export default Intro;