import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';
import './ViewBlog.css';


export default class ViewBlog extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const viewBlogStyle = {
      backgroundColor: '#3e4d4f',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '100%',
      color: 'white',
    };
    return (
      <div style={viewBlogStyle}>
        <h1 style={{textAlign: 'center', margin: '2em', marginBottom: '1.2em'}}>{this.props.title}</h1>
        <div id="blog-content" dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

