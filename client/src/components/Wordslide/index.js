import React, { Component } from "react";
import {Spring} from 'react-spring/renderprops'
import "./style.css";




const arr = [
    "important moments",
    "grocery lists",
    "studying",
    "million dollar ideas"
]


class Words extends Component {


    state
    render() {
        return(
        <Spring
            from={{ opacity: 0}}
            to={{opacity: 1}}
        >
            { props => (
                <div style={props}>
                   <h2>Hello</h2>
                </div>
            )}
        </Spring>

        );
    }
}


export default Words;