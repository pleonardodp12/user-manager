import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/cadastro" component={Signup} />
          <Route exact path="/senha-esquecida" component={ForgotPassword} />
          <Route exact path="/entrar" component={Login} />
        </Switch>
    </Router>
  )
}

export default Routes;
