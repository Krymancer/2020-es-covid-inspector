import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Report from "./pages/Report.js";
import Customers from "./pages/Customers.js";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/customers" component={Customers} />
        <Route path="/report" component={Report} />
      </Switch>
    </Router>
  );
}

export default Routes;
