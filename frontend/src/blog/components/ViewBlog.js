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
  const [createdAt, setCreatedAt] = useState(formatDate(props.createdAt));

  useEffect(() => {
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
        setCreatedAt(formatDate(json.createdAt));
      })
      .catch(console.error);
    };
    // If not editing a blog, fetch blog from DB
    if (!props.isEditing) {
      fetchBlog();
    }
  }, [props.isEditing, props.match.params.urlTitle]);

  useEffect(() => Prism.highlightAll(), [content]);

  function formatDate(dateString) {
    if (!dateString) return;
    const date = new Date(dateString);
    return `${date.toLocaleString('default', {month:'long'})} ${date.getDate()}, ${date.getFullYear()}`;
  }

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
      <h1 style={{textAlign: 'center', margin: '2em', marginBottom: '0.2em'}}>{title}</h1>
      <h3 style={{fontSize: '0.7em', margin: 0, textAlign: 'center'}}>{createdAt}</h3>
      <div id="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
