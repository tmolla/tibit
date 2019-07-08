import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
// import Saved from "./pages/Saved";
import View from "./pages/View";
//import SignUp from "./pages/Signup"
import NoMatch from "./pages/NoMatch";
//import MyModal from "./pages/MyModal"
import Nav from "./components/Nav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import PrivateRoute from "./components/private-route/PrivateRoute";

//import Setting from "./pages/Setting";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          {/* <Route exact path="/sign-up" component={SignUp} />   */}
          <PrivateRoute exact path="/view" component={View} />     
          <Route component={NoMatch} />   
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
