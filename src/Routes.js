import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/cart' component={Cart} />
  </Switch>
);

export default Routes;