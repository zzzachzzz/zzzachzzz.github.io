import React from 'react';

export default function DeleteBlog(props) {
  const onEnter = async value => {
    if (value === props.match.params.urlTitle) {
      return fetch(`/api/blogs/${props.match.params.urlTitle}`, {
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
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <p>Enter the blog url title to confirm</p>
      <input type="text" style={{width: '280px'}}
       onKeyDown={(e) => e.key === 'Enter' ? onEnter(e.target.value) : null} />
    </div>
  );
}

