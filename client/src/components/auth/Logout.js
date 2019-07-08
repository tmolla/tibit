import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as authAction from "../../actions/authActions";

class Logout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(authAction.logoutUser());
  }

  render() {
    console.log("in logout");
    return (
      <Redirect to="/" />
    );
  }

}

export default connect()(Logout);