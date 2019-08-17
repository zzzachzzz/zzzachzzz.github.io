import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';
import './App.css';

export default () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/blog" component={Blog} />
    </Switch>
  </BrowserRouter>
)
