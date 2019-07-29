import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EditBlog from './components/EditBlog';
// import ViewBlog from './components/ViewBlog';

export default () => (
  <BrowserRouter>
    <Switch>
        {/* <Route exact path="/blog/:urlTitle" component={ViewBlog} /> */}
        {/* <Route exact path="/blog/edit/:urlTitle" component={EditBlog} /> */}
        <Route exact path="/blog/edit" component={EditBlog} />
    </Switch>
  </BrowserRouter>
)
