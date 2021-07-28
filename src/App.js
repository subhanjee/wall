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

function App() {
  return (
    <Router>
       <Redirect to="/signup" />
    <div>
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
      </Switch>
    </div>
  </Router>
  );
}

export default App;
