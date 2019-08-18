import { Editor } from 'slate-react';
import { Value } from 'slate';
import Html from 'slate-html-serializer';

import React from 'react';
import './SlateEditor.css';
import { Button, Icon, Toolbar } from './SlateComponents.js';
import { isKeyHotkey } from 'is-hotkey'

import initialValueAsJson from './value.json';

const DEFAULT_NODE = 'paragraph';

const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+;');
const isInlineCodeHotkey = isKeyHotkey("mod+'");
const initialValue = Value.fromJSON(initialValueAsJson);

const rules = [
  {
    serialize(obj, children) {
      if (obj.object === 'block' && obj.type === 'paragraph') {
        return <p className={obj.data.get('className')}>{children}</p>
      }
      if (obj.object === 'block' && obj.type === 'code_line') {
        return (
          <React.Fragment>
            {children}{'\n'}
          </React.Fragment>
        );
      }
      if (obj.object === 'block' && obj.type === 'code') {
        const codeLanguage = `language-${obj.data.get('language')}`;
        return <pre><code className={codeLanguage}>{children}</code></pre>;
      }
      if (obj.object === 'mark' && obj.type === 'code') {
        return <code className="code-inline">{children}</code>;
      }
      if (obj.object === 'mark' && obj.type === 'bold') {
        return <b>{children}</b>
      }
      if (obj.object === 'mark' && obj.type === 'underlined') {
        return <u>{children}</u>
      }
      if (obj.object === 'mark' && obj.type === 'italic') {
        return <i>{children}</i>
      }
      if (obj.object === 'block' && obj.type === 'heading-one') {
        return <h1>{children}</h1>
      }
      if (obj.object === 'block' && obj.type === 'heading-two') {
        return <h2>{children}</h2>
      }
      if (obj.object === 'block' && obj.type === 'numbered-list') {
        return <ol>{children}</ol>
      }
      if (obj.object === 'block' && obj.type === 'bulleted-list') {
        return <ul>{children}</ul>
      }
      if (obj.object === 'block' && obj.type === 'list-item') {
        return <li>{children}</li>
      }
      if (obj.object === 'string') {
        return children;
      }
    },
  },
];

const html = new Html({ rules });

function CodeBlock(props) {
  const { editor, node } = props;
  const language = node.data.get('language');

  function onChange(event) {
    editor.setNodeByKey(node.key, { data: { language: event.target.value } });
  }

  return (
    <div style={{ position: 'relative' }}>
      <pre className="code-block">
        <code {...props.attributes}>
          {props.children}
        </code>
      </pre>
      <div
        contentEditable={false}
        style={{ position: 'absolute', top: '5px', right: '5px' }}
      >
        <select value={language} onChange={onChange}>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
    </div>
  );
}

function CodeBlockLine(props) {
  return <div className="CODE_BLOCK_LINE" {...props.attributes}>{props.children}</div>;
}

export default class SlateEditor extends React.Component {
  state = {
    value: initialValue,
  };

  onChange = ({ value }) => this.setState({ value });

  ref = editor => {
    this.editor = editor;
  };

  exportHtml = () => {
    return html.serialize(this.state.value);
  };

  importHtml = (htmlString) => {
    this.setState({ value: html.deserialize(htmlString) });
  };

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  };

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type === type)
  };

  render() {
    return (
      <div>
        <Toolbar>
          {this.renderMarkButton('bold', 'format_bold')}
          {this.renderMarkButton('italic', 'format_italic')}
          {this.renderMarkButton('underlined', 'format_underlined')}
          {this.renderBlockButton('code', 'code')}
          {this.renderBlockButton('heading-one', 'looks_one')}
          {this.renderBlockButton('heading-two', 'looks_two')}
          {this.renderBlockButton('block-quote', 'format_quote')}
          {this.renderBlockButton('numbered-list', 'format_list_numbered')}
          {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
        </Toolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Write some code..."
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderBlock={this.renderBlock}
          renderMark={this.renderMark}
        />
      </div>
    );
  }

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type);

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  }

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value: { document, blocks } } = this.state;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  }

  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'code_line':
        return <CodeBlockLine {...props} />;
      case 'code':
        return <CodeBlock {...props} />;
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return next();
    }
  }

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <code className= "code-inline" {...attributes}>{children}</code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  }

  onKeyDown = (event, editor, next) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isInlineCodeHotkey(event)) {
      mark = 'code';
    } else if (isCodeHotkey(event)) {
      event.preventDefault();
      editor.insertBlock({
        "object": "block",
        "type": "code",
        "data": {
          "language": "javascript"
        },
        "nodes": [
          {
            "object": "block",
            "type": "code_line",
            "nodes": [
              {
                "object": "text",
                "text": ""
              }
            ]
          }
        ]
      });
      return;
    } else {
      return next();
    }

    event.preventDefault();
    editor.toggleMark(mark);
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  }

  onClickBlock = (event, type) => {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    if (type === 'code') {
      editor.insertBlock({
        "object": "block",
        "type": "code",
        "data": {
          "language": "javascript"
        },
        "nodes": [
          {
            "object": "block",
            "type": "code_line",
            "nodes": [
              {
                "object": "text",
                "text": ""
              }
            ]
          }
        ]
      });
    }
    // Handle everything but list buttons.
    else if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      })

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  }
}
