import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Blog from './Pages/Blog';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
