import React, {Component} from "react";
import "./style.css";


class Tibit extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: props.id,
      action: props.action,
      //location: props.location,
      date: (new Date(props.date)).toDateString(),
      DeleteButton: props.DeleteButton,
      UpdateButton: props.UpdateButton,
      HandleColors: props.HandleColors,
      color: props.color,
      allColors:[
        "rgb(84, 131, 233)",
        "rgb(84, 199, 119)",
        "rgb(190, 10, 190)",
        "rgb(230, 156, 38)",
        "rgb(224, 222, 89)",
        "rgb(245, 83, 83)",
        "rgb(121, 83, 245)",
        "rgb(209, 77, 221)"
      ],
    };
    console.log("view start color " + props.color)
    console.log("Formatted date " + this.state.date)
  }

  changeColor() {
    //console.log("color start: " + this.state.color)
    var currentColorIndex = 0
    if (this.state.color !== "") { //there is color  
      currentColorIndex = this.state.allColors.indexOf(this.state.color)
      //console.log("if start " + currentColorIndex)
      if (currentColorIndex === this.state.allColors.length -1) {
        currentColorIndex = 0 // set it back to the first
      }else {
        currentColorIndex = currentColorIndex + 1 //get the next
      }
      //console.log("if end " + currentColorIndex)
    }
    //console.log("before setting state " + currentColorIndex)
    this.setState({
      color: this.state.allColors[currentColorIndex]
    })
    this.state.HandleColors(this.state.id, this.state.allColors[currentColorIndex]);
    //console.log("After setting state " + this.state.allColors[currentColorIndex])
  }

  render() {
    var cts = this.props.date,
      cdate = (new Date(cts)).toDateString();
    return (
      <div className="card" style={{background: this.state.color}}>
        <div className="card-header">
            <div className="float left">
              <this.state.UpdateButton />
              <this.state.DeleteButton /> 
              <p
                onClick={this.changeColor.bind(this)}
                className="text-danger d-inline m-2">
                <i class="inverted tint icon"></i>
              </p>
           </div>
        </div>
        <div className="card-body">
          {this.props.action &&<p className="float-left">{this.props.action}</p>}
        </div>
        {/* <hr/> */}
        {this.props.date && <p className=" float-right font-italic small m-2">{cdate}</p>}
      </div>
    );
  }
}

export default Tibit;