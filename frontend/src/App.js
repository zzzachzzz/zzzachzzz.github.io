import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route path="/blog" component={Blog} />
    </Switch>
  </BrowserRouter>
);
