import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index'
import Register from './pages/Register/index';
import Dashboard from './pages/Dashboard/index';

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default Routes;