import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { useAuth } from "./contexts/AuthContext";
import Users from "./Pages/Users";

export function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/entrar" />
      }}
    ></Route>
  )
}

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/entrar" />
          </Route>
          <Route path="/cadastro" component={Signup} />
          <Route path="/senha-esquecida" component={ForgotPassword} />
          <Route path="/entrar" component={Login} />
          <PrivateRoute path="/usuarios" component={Users} />
        </Switch>
    </Router>
  )
}

export default Routes;
