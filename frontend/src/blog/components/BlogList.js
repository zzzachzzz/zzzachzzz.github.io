import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import './BlogList.css';

export default function BlogList(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(res);
        throw Error(`Request rejected with status ${res.status}`);
      }
    })
    .then(json => {
      setBlogs(json);
      // this.setState({ blogs: json });
    })
    .catch(console.error);
  }, [blogs]);

  const blogListStyle = {
    backgroundColor: '#3e4d4f',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '100%',
    color: 'white',
  };

  return (
    <div>
      <Helmet>
        <title>{'Python & JavaScript Tutorials – { zrose.info }'}</title>
      </Helmet>
      <Navigation {...props} />
      <div style={blogListStyle}>
        <h1>Recent Posts</h1>
        <div style={{flexDirection: 'column', display: 'flex', alignItems: 'flex-start', width: '80%'}}>
          {blogs.map((blog, index) => <BlogPreview title={blog.title} urlTitle={blog.urlTitle} key={index} />)}
        </div>
      </div>
    </div>
  );
}

function BlogPreview({ title, urlTitle }) {
  const prismBlue = '#66d9ef';
  const prismGreen = '#a6e22e';
  const prismRed = '#f92672';

  return (
    <Link className="link-block" to={`/blog/${urlTitle}`}>
      <div style={{fontSize: '1em', display: 'flex', alignItems: 'center'}}>
        <span style={{color: prismRed}}>{`{`}</span>
        <span style={{color: prismBlue}}>{`{`}</span>
        <span style={{color: prismGreen}}>{`{`}</span>
      </div>
      <p style={{marginLeft: '1.5em', marginRight: '1.5em', textAlign: 'center', display: 'flex', alignItems: 'center'}}>{title}</p>
      <div style={{fontSize: '1em', display: 'flex', alignItems: 'center'}}>
        <span style={{color: prismGreen}}>{`}`}</span>
        <span style={{color: prismBlue}}>{`}`}</span>
        <span style={{color: prismRed}}>{`}`}</span>
      </div>
    </Link>
  );
}
