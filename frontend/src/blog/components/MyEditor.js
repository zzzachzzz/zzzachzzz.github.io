import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState } from 'draft-js';


export default class MyEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    editorState: EditorState.createEmpty(),
    // value: RichTextEditor.createEmptyValue(),
    other: ''
  };

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      let options = {
        blockStyleFn: (block) => {
          const type = block.getType();
          if (type === 'code-block') {
            console.log(type);
            return {
              attributes: {
                class: 'language-javascript'
              }
            };
          }
        }
      };
      this.props.onChange(
          value.toString('html', options)
      );
    }
  };

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
