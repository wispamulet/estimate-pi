import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EstimatePi from './pages/EstimatePi';
import About from './pages/About';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={EstimatePi} />
    <Route path="/estimate-pi" component={EstimatePi} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Router;
