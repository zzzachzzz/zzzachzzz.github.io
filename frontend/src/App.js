import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GAListener from './GAListener';

import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';

export default () => (
  <BrowserRouter>
    {process.env.NODE_ENV === 'production'
      ? <GAListener trackingId="UA-146825130-1"><Routes /></GAListener>
      : <Routes />
    }
  </BrowserRouter>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Portfolio} />
    <Route path="/blog" component={Blog} />
  </Switch>
);

