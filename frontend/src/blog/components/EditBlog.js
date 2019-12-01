import React, { useState, useEffect, useRef } from 'react';
import SlateEditor from './SlateEditor';
import ViewBlog from './ViewBlog';

export default function EditBlog(props) {
  const [showEditor, setShowEditor] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const refsEditor = useRef();

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
        refsEditor.current.importHtml(json.content);
        setTitle(json.title);
      })
      .catch(console.error);
    }
  }, [isBlogUpdate, props.match.params.urlTitle]);

  const toggleEditorPreview = () => {
    // If Editor is being shown, toggle to hide and show preview
    if (showEditor) {
      setShowEditor(false);
      setContent(refsEditor.current.exportHtml());
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
        title: title,
        content: refsEditor.current.exportHtml()
      }),
    })
    .then(res => {
      if (!res.ok) {
        console.log(res);
        throw Error(res.statusText);
      }
      props.history.push('/blog')  // Redirect on success
    })
    .catch(error => {
      if (error.message === 'Unauthorized') {
        alert(`${error.message}: You are not Zach`);
      } else {
        alert(`${error.message}`);
      }
    });
  };

  const buttonStyle = {
    backgroundColor: 'grey', color: 'black', borderRadius: '50%', width: '50px', height: '50px',
    cursor: 'pointer', outline: 'none', position: 'fixed', border: 'none',
    boxShadow: '4px 6px 8px rgba(0, 0, 0, .8)', margin: '15px', fontWeight: 'bold',
  };

  return (
    <div style={{ minHeight: '100vh', color: 'white', backgroundColor: '#3e4d4f'}}>
      <button onClick={() => toggleEditorPreview()} style={{...buttonStyle, left: '8px', top: '8px'}}>
        {showEditor ? "View" : "Edit"}
      </button>
      <button onClick={() => saveBlog()} style={{...buttonStyle, left: '8px', bottom: '8px'}}>
        {"Save"}
      </button>
      {/* Hide component without re-render to avoid losing state of Editor */}
      <div style={{padding: '10vw', paddingTop: '5vh',
                   display: showEditor ? 'block' : 'none'}}>
        <div style={{outline: '2px solid white', padding: '5vw'}}>
          <input type="text" placeholder="<Blog Title>"
            style={{width: '80%', fontSize: '1em', display: 'block', margin: '0 auto', marginTop: '0', marginBottom: '1.2em', padding: '0.6em'}}
            value={title} onChange={(e) => setTitle(e.target.value)}
          />
          <SlateEditor ref={refsEditor} />
        </div>
      </div>
      { !showEditor &&
        <ViewBlog content={content} title={title} match={props.match} isEditing={true} /> }
    </div>
  );
}
