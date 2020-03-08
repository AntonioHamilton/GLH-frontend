import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Signature from './Pages/Signature';
import System from './Pages/System';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/assinatura" component={Signature} />
      <Route path="/sistema" component={System} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
