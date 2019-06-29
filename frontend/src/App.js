import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';

export default () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Portfolio} />
        <Route path="/blog" exact component={Blog} />
    </Switch>
  </BrowserRouter>
)
