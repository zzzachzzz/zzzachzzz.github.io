import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';
import './ViewBlog.css';


export default class ViewBlog extends Component {
  state = {
    title: this.props.title,
    content: this.props.content,
  };

  async componentDidMount() {
    if (this.props.match) {
      await fetch('/api/blogs/' + this.props.match.params.urlTitle)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then(json => {
        this.setState({
          title: json.title,
          content: json.content
        });
      })
      .catch(console.error);
    }
    Prism.highlightAll();
  }

  render() {
    const viewBlogStyle = {
      backgroundColor: '#3e4d4f',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      color: 'white',
    };
    return (
      <div style={viewBlogStyle}>
        <h1 style={{textAlign: 'center', margin: '2em', marginBottom: '1.2em'}}>{this.state.title}</h1>
        <div id="blog-content" dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    );
  }
}

