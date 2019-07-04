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
      UpdateButton: props.UpdateButton
    };
  }

  render() {
    var cts = this.props.date,
      cdate = (new Date(cts)).toDateString();
    return (
      <div className="card">
        <div className="card-header">
            <p className="font-weight-bold text-success d-inline h5">TibiT</p>
            <div className="float-right d-inline">
              <this.state.UpdateButton />
              <this.state.DeleteButton /> 
            </div>
        </div>
        <div className="card-body">
          {this.props.action &&<p>{this.props.action}</p>}
        </div>
        <hr/>
            {this.props.date && <p className=" float-right font-italic small m-2">{cdate}</p>}
      </div>
    );
  }
}

export default Tibit;