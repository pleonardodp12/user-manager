import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./Pages/Signup";

function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default Routes;
