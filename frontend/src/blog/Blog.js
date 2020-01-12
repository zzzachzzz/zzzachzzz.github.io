import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogList from './components/BlogList';
import EditBlog from './components/EditBlog';
import ViewBlog from './components/ViewBlog';
import DeleteBlog from './components/DeleteBlog';

export default () => (
  <Switch>
    <Route exact path="/blog" component={BlogList} />
    <Route exact path="/blog/edit/:urlTitle" component={EditBlog} />
    <Route exact path="/blog/edit" component={EditBlog} />
    <Route exact path="/blog/:urlTitle" component={ViewBlog} />
    <Route exact path="/blog/delete/:urlTitle" component={DeleteBlog} />
  </Switch>
);

