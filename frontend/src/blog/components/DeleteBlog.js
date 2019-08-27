import React from 'react';

export default function DeleteBlog(props) {

  function onEnter(value) {
    if (value === props.match.params.urlTitle) {
      fetch(`/api/blogs/${props.match.params.urlTitle}`, {
        method: 'DELETE',
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
    }
  }

  return (
    <div>
      <p>Enter the blog url title to confirm</p>
      <input type="text" onKeyDown={(e) => e.key === 'Enter' ? onEnter(e.target.value) : null} />
    </div>
  );
}
