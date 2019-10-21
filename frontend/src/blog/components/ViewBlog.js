import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';
import './ViewBlog.css';
import Navigation from './Navigation';

export default function ViewBlog(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  useEffect(() => {
    console.log('hit it');
    const fetchBlog = async () => {
      await fetch('/api/blogs/' + props.match.params.urlTitle)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then(json => {
        setTitle(json.title);
        setContent(json.content);
      })
      .catch(console.error);
    };
    // If not editing a blog, fetch blog from DB
    if (!props.isEditing) {
      fetchBlog();
    }
    Prism.highlightAll();
  }, [props.isEditing, props.match.params.urlTitle]);

  const viewBlogStyle = {
    backgroundColor: '#3e4d4f',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color: 'white',
  };

  return (
    <div style={viewBlogStyle}>
      <Helmet>
        <title>{title + ' – { zrose.info }'}</title>
      </Helmet>
      <Navigation {...props} />
      <h1 style={{textAlign: 'center', margin: '2em', marginBottom: '1.2em'}}>{title}</h1>
      <div id="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
