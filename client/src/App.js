import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Saved from "./pages/Saved";
import View from "./pages/View";
import SignUp from "./pages/Sign-up"
import NoMatch from "./pages/NoMatch";
//import MyModal from "./pages/MyModal"
import Nav from "./components/Nav";
//import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/search" component={Search} /> */}
          <Route exact path="/view" component={View} />
          <Route exact path="/sign-up" component={SignUp} />          
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
