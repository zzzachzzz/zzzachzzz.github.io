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
      backgroundColor: '#3e4d4f', //'#514f48',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      height: '100%',
    };
    const childStyle = {
      // maxWidth: '1000px',
      // margin: '5%',
      color: 'white',
      fontSize: '22px',
      lineHeight: '1.6em',
    };
    return (
      <div id="PARENT" style={viewBlogStyle}>
        <div id="CHILD" style={childStyle} dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

