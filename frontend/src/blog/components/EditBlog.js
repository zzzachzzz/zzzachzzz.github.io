import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';
import SlateEditor from './SlateEditor';
import ViewBlog from './ViewBlog';

import Content from './content.js';

export default class EditBlog extends Component {
  constructor() {
    super();
    this.refsEditor = React.createRef();
    this.state = {
      showEditor: false,
      content: Content,
      title: "Slate.js: Draft.js Without the Bad Parts",
    };
  }

  toggleEditorPreview = () => {
    // If Editor is being shown, toggle to hide and show preview
    if (this.state.showEditor) {
      this.setState({
        showEditor: false,
        content: this.refsEditor.current.exportHtml(),
      });
    } else {
      this.setState({ showEditor: true });
    }
  };

  asdf = () => {
    //{this.props.match.params.urlTitle}
    fetch('/api/blogs', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   title: 'DO IT AGAIN DUDE',
      //   content: '<h1> L O L </h1>',
      //   password: 'yol',
      // }),
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(JSON.stringify(json));
    });
  };

  render() {
    return (
      <div id="AYYYY" style={{ height: '100%' }}>
        <button onClick={() => this.toggleEditorPreview()}>{this.state.showEditor ? "Preview" : "Edit"}</button>
        {/* Hide component without re-render to avoid losing state of Editor */}
        <div style={ this.state.showEditor ? null : {display: 'none'} } >
          <SlateEditor ref={this.refsEditor} />
        </div>
        { !this.state.showEditor &&
          <ViewBlog content={this.state.content} title={this.state.title} /> }
      </div>
    );
  }
}
