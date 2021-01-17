import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
  )
}

export default Routes;
