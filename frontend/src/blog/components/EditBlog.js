import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import ViewBlog from './ViewBlog';

export default function EditBlog(props) {
  const [showEditor, setShowEditor] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let isBlogUpdate;
  if (props.match && props.match.params && props.match.params.urlTitle) {
    isBlogUpdate = true;
  } else {
    isBlogUpdate = false;
  }

  useEffect(() => {
    if (isBlogUpdate) {
      fetch('/api/blogs/' + props.match.params.urlTitle)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error(res.statusText);
          }
        })
        .then(json => {
          setTitle(json.title);
          setContent(json.content);
        })
        .catch(console.error);
    }
  }, [isBlogUpdate, props.match.params.urlTitle]);

  const toggleEditorPreview = () => {
    // If Editor is being shown, toggle to hide and show preview
    if (showEditor) {
      setShowEditor(false);
    } else {
      setShowEditor(true);
    }
  };

  const saveBlog = () => {
    // Create or update based on url
    const url = '/api/blogs/' + (isBlogUpdate ? props.match.params.urlTitle : '');

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then(res => {
        if (!res.ok) {
          if (res.status === 401) alert('Unauthorized: You are not Zach');
          else console.error(res);
        } else {
          props.history.push('/blog');  // Redirect on success
        }
      });
  };

  const buttonStyle = {
    backgroundColor: 'grey', color: 'black', borderRadius: '50%', width: '50px', height: '50px',
    cursor: 'pointer', outline: 'none', position: 'fixed', border: 'none',
    boxShadow: '4px 6px 8px rgba(0, 0, 0, .8)', margin: '15px', fontWeight: 'bold',
  };

  return (
    <div style={{ height: '100%', color: 'white', backgroundColor: '#3e4d4f'}}>
      <button onClick={() => toggleEditorPreview()} style={{...buttonStyle, left: '8px', top: '8px'}}>
        {showEditor ? "View" : "Edit"}
      </button>
      <button onClick={() => saveBlog()} style={{...buttonStyle, left: '8px', bottom: '8px'}}>
        {"Save"}
      </button>
      {/* Hide component without re-render to avoid losing state of Editor */}
      <div css={`
        display: ${showEditor ? 'flex' : 'none'};
        flex-direction: column;
        padding: 5% 15%;
        height: 100%;
      `}>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <Textarea value={content} onChange={e => setContent(e.target.value)} />
      </div>
      { !showEditor &&
        <ViewBlog content={content} title={title} match={props.match} isEditing={true} /> }
    </div>
  );
}
const Input = styled.input.attrs({
  type: 'text',
  placeholder: '<Blog Title>',
  autoFocus: true,
})`
  width: 80%;
  font-size: 1em;
  display: block;
  margin: 0 auto 1.2em auto;
  padding: 0.6em;
`;

const Textarea = styled.textarea.attrs({
  autocomplete: 'off',
  spellcheck: 'true',
})`
  resize: none;
  width: 100%;
  height: 100%;
`;

