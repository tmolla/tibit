import React from "react";
import { useSpring, animated } from 'react-spring'
import "./style.css";

const Words = () => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

 return (
   <div className="words">
     <animated.div style={fade}>Hello</animated.div>
   </div>
 )

}  



export default Words;