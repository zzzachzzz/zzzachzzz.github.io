import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import unified from 'unified';
import markdownParser from 'remark-parse';
import Prism from 'prismjs';
import '../prism.css';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-docker.js';
import 'prismjs/components/prism-yaml.js';
import './ViewBlog.css';

import Navigation from './Navigation';
import TreeToJSX from './TreeToJSX';

const ViewBlog = props => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [createdAt, setCreatedAt] = useState(formatDate(props.createdAt));

  const { urlTitle } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      return fetch('/api/blogs/' + urlTitle)
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
    if (!props.isEditing && urlTitle) {
      fetchBlog();
    }
  }, [props.isEditing, urlTitle]);

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
      <BlogContent content={content} />
    </div>
  );
};

const BlogContent = React.memo(({ content }) => {
  const tree = unified().use(markdownParser).parse(content);

  useEffect(Prism.highlightAll, [content]);

  return (
    <div id="blog-content">
      <TreeToJSX tree={tree} />
    </div>
  );
});

export default React.memo(ViewBlog);

