import React, {Component} from "react";
import "./style.css";


class Tibit extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: props.id,
      action: props.action,
      note: props.note,
      goal: props.goal,
      location: props.location,
      date: props.date,
      DeleteButton: props.DeleteButton,
      UpdateButton: props.UpdateButton,
      color: "rgb(84, 131, 233)"
    };
  }

  // changeColor() changes color of TibiT card //

  changeColor() {

    if(this.state.color == "rgb(84, 131, 233)") {

      this.setState({
        color: "rgb(84, 199, 119)"
      })

    }
   else {
    this.setState({
      color: "rgb(190, 10, 190)"
    })
   }

  }

  render() {
    var cts = this.props.date,
      cdate = (new Date(cts)).toDateString();
    return (
      <div className="card" onClick={this.changeColor.bind(this)} style={{background: this.state.color}}>
        <div className="card-header">
            <div className="float left">
              <this.state.UpdateButton />
              <this.state.DeleteButton /> 
           </div>
        </div>
        <div className="card-body float-center">
        <p>{this.props.action &&<p>{this.props.action}</p>}</p>
        </div>
        <hr/>
            {this.props.date && <p className=" float-right font-italic small m-2">{cdate}</p>}
      </div>
    );
  }
}

export default Tibit;