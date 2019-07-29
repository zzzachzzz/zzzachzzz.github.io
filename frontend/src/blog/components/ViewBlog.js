import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';


export default class ViewBlog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
    );
  }
}
