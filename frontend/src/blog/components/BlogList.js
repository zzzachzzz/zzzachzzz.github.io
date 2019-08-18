import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BlogList.css';


export default class BlogList extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    fetch('/api/blogs')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(res);
        // alert(res.status);
        throw Error(`Request rejected with status ${res.status}`);
      }
    })
    .then(json => {
      this.setState({ blogs: json });
    })
    .catch(console.error);
  }

  render() {
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
      <div style={blogListStyle}>
        <h1>Recent Posts</h1>
        <div style={{flexDirection: 'column', display: 'flex', align_items: 'flex-start', width: '80%'}}>
          {this.state.blogs.map((blog, index) => <BlogPreview title={blog.title} urlTitle={blog.urlTitle} key={index} />)}
        </div>
      </div>
    );
  }
}

function BlogPreview({ title, urlTitle }) {
  const prismBlue = '#66d9ef';
  const prismGreen = '#a6e22e';
  const prismRed = '#f92672';
  const prismPurple = '#ae81ff';

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
