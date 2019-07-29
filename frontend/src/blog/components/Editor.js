import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor, { Modifier } from 'react-rte';
import './Editor.css';


export default class Editor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = (value) => {
    this.setState({value});
  };

  exportHtml = () => {
    let options = {
      blockRenderers: {
        'code-javascript': (block) => {
          // let data = block.getData();
          return '<pre><code class="language-javascript">' + block.getText() + '</code></pre>';
        },
        'code-python': (block) => {
          // let data = block.getData();
          return '<pre><code class="language-python">' + block.getText() + '</code></pre>';
        },
      },
    };
    return this.state.value.toString('html', options);
  };

  render() {
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS',
                'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Python', style: 'code-python'},
        {label: 'JavaScript', style: 'code-javascript'},
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'},
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
    };

    const blockStyleFn = (contentBlock) => {
      const type = contentBlock.getType();
      if (type  === 'code-python' || type === 'code-javascript') {
        return 'codeBlock';
      }
    };

    return (
      <div>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          // toolbarConfig={toolbarConfig}
          blockStyleFn={blockStyleFn}
          stripPastedStyles={true}
        />
      </div>
    );
  }
}
