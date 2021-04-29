import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/Details" component={Details} />
  </Switch>
);

export default Routes;
