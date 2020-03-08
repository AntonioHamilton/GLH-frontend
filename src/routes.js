import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Signature from './Pages/Signature';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/assinatura" component={Signature} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
