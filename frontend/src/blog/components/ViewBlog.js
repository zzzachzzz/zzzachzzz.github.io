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
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '100%',
      color: 'white',
    };
    const childStyle = {};
    return (
      <div id="PARENT" style={viewBlogStyle}>
        <h1 style={{textAlign: 'center', margin: '50px', marginBottom: '28px'}}>{this.props.title}</h1>
        <div id="CHILD" style={childStyle} dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

