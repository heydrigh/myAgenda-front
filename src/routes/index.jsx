import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Details from '../pages/Details';
import CreateContact from '../pages/CreateContact';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/create" component={CreateContact} isPrivate />
    </Switch>
  );
};

export default Routes;
