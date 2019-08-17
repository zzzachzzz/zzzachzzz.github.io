import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';


export default class BlogList extends Component {
  state = {
    blogs: [
      {title: 'Once upon a time', urlTitle: 'once-upon-a-time'},
      {title: 'Slate.js: Draft.js Without the Bad Parts', urlTitle: 'slatejs-draftjs-without-the-bad-parts'},
      {title: 'A longer title how long will it go lol that rhymes accidentally (please god no)', urlTitle: 'bad-link'}
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



    const other = {flexDirection: 'column', display: 'flex', align_items: 'flex-start', width: '80%'};
    return (
      <div style={blogListStyle}>
        <h1>Recent Posts</h1>
        <div style={other}>
          {this.state.blogs.map((blog) => <BlogPreview title={blog.title} urlTitle={blog.urlTitle} />)}
        </div>
      </div>
    );
  }
}

function BlogPreview({ title, urlTitle }) {
  const linkStyle = {fontSize: '24px', color: 'white', textDecoration: 'none', margin: '30px', textDecoration: 'none',
                     fontFamily: 'Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace'};
  const blockStyle = {
    height: '72px',
    background: '#272822',
    borderRadius: '0.3em',
    margin: '25px',
    padding: '20px'
  };
  return (
    <div style={blockStyle}>
      <span style={{fontSize: '24px', marginRight: '15px'}}>&nabla;</span>
      <Link style={linkStyle} to={`/blog/${urlTitle}`}>{title}
      </Link>
    </div>
  );
}
