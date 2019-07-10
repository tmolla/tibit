import React, {Component} from 'react';

class ColorButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "red"
        };
    }

    changeColor() {
        console.log("Color change!");
        this.setState({
            color: "green"
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.changeColor.bind(this)} style={{background: this.state.color}}>
                Color
                </button>
            </div>
        )
    }
}

export default ColorButton;