import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {

  const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: '1.2em',
    textDecoration: 'none',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '5px',
  };

  const arrowStyle = {
    margin: '5px',
    color: 'white',
    fontWeight: '500',
  };

  const { urlTitle } = props.match.params;
  return (
    <div style={navStyle}>
      <Link to="/" className="blog-link" style={linkStyle}>/</Link>
      <span style={arrowStyle}>&gt;</span>
      <Link to="/blog" className="blog-link" style={linkStyle}>blog</Link>
      {urlTitle && <span style={arrowStyle}>&gt;</span>}
      {urlTitle &&
        <Link to={`/blog/${urlTitle}`}
          className="blog-link" style={linkStyle}>
          {urlTitle}
        </Link>
      }
    </div>
  );
}
