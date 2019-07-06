import React, { Component, useState, useEffect } from "react";
import {useSpring, animated} from 'react-spring'
import "./style.css";

const Words = () => {

    const props = useSpring({
        opacity: 1,
        color: "white",
        from: { opacity: 0 }
      })

      return <animated.h2 style={props}>hello</animated.h2>
        
    }


    


export default Words;