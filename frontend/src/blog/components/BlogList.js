import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';
import './BlogList.css';


export default class BlogList extends Component {
  state = {
    blogs: [
      {title: 'Once upon a time', urlTitle: 'once-upon-a-time'},
      {title: 'Slate.js: Draft.js Without the Bad Parts', urlTitle: 'slatejs-draftjs-without-the-bad-parts'},
      {title: 'A longer title how long will it go lol that rhymes accidentally (please god no) oh but it does go even even longer longer', urlTitle: 'bad-link'}
    ]
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const blogListStyle = {
      backgroundColor: '#3e4d4f',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '100%',
      color: 'white',
    };

    return (
      <div style={blogListStyle}>
        <h1>Recent Posts</h1>
        <div style={{flexDirection: 'column', display: 'flex', align_items: 'flex-start', width: '80%'}}>
          {this.state.blogs.map((blog) => <BlogPreview title={blog.title} urlTitle={blog.urlTitle} />)}
        </div>
      </div>
    );
  }
}

function BlogPreview({ title, urlTitle }) {
  const prismBlue = '#66d9ef';
  const prismGreen = '#a6e22e';
  const prismRed = '#f92672';
  const prismPurple = '#ae81ff';

  return (
    <Link class="link-block" to={`/blog/${urlTitle}`}>
      <div style={{fontSize: '1em', display: 'flex', alignItems: 'center'}}>
        <span style={{color: prismRed}}>{`{`}</span>
        <span style={{color: prismBlue}}>{`{`}</span>
        <span style={{color: prismGreen}}>{`{`}</span>
      </div>
      <p style={{marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', display: 'flex', alignItems: 'center'}}>{title}</p>
      <div style={{fontSize: '1em', display: 'flex', alignItems: 'center'}}>
        <span style={{color: prismGreen}}>{`}`}</span>
        <span style={{color: prismBlue}}>{`}`}</span>
        <span style={{color: prismRed}}>{`}`}</span>
      </div>
    </Link>
  );
}
