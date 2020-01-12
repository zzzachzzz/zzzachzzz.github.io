import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GAListener from './GAListener';

import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';

export default () => (
  <BrowserRouter>
    <GAListener trackingId="UA-146825130-1">
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </GAListener>
  </BrowserRouter>
);

