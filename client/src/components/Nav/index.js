import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../store"
import "./style.css";
//import reducers from "../../reducers";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      // <nav className="navbar sticky-top navbar-expand-lg .bg-transparent">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          TibiT
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">

          <ul className="navbar-nav">
          <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
                style={{
                   color:"rgb(66, 149, 245)",
                   fontSize:"20px"
                 }}
              >
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/view" ? "nav-link active" : "nav-link"}
                to="/view"
                style={{
                  color:"rgb(66, 149, 245)",
                  fontSize:"20px"
                }}
              >
                View
              </Link>
            </li>
            {/* check if the user is authenticated. If authenticated show logout */}
            {!store.getState().auth.isAuthenticated ? 
            (
              <li className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  to="/login"
                  // this is just to show how we can do styling here
                   style={{
                     color:"rgb(66, 149, 245)",
                     fontSize:"20px"
                     
                   }}
                >
                  Login
                </Link>
            </li>  
          ) : (
            <li className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "logout" ? "nav-link active" : "nav-link"}
                  to="logout"
                  // this is just to show how we can do styling here
                  style={{
                    color:"rgb(66, 149, 245)",
                    fontSize:"20px"
                  }}
                >
                  Logout
                </Link>
            </li> 
          )} 
          </ul>   

        </div>
      </nav>
    );
  }
}

export default Nav;
