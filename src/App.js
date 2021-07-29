import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Screens/Login/Login";
import Signup from "./Screens/Signup/Signup";
import Otp from './Screens/Otp/Otp';
import Home from './Screens/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/otp">
          <Otp/>
        </Route>
        <Route path="/home">
       <Home/>
        </Route>
        <Redirect from="*" to="/login" />
      </Switch>
  </Router>
  );
}

export default App;
