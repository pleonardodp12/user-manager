import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./Pages/ForgotPassword";
import Signup from "./Pages/Signup";

function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default Routes;
