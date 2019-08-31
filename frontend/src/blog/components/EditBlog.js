import React, { Component } from 'react';
import SlateEditor from './SlateEditor';
import ViewBlog from './ViewBlog';

export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.refsEditor = React.createRef();
    this.state = {
      showEditor: true,
      title: "",
      content: "",
    };

    const match = this.props.match;
    if (match && match.params && match.params.urlTitle) {
      this.isBlogUpdate = true;
    } else {
      this.isBlogUpdate = false;
    }
  }

  componentDidMount() {
    if (this.isBlogUpdate) {
      fetch('/api/blogs/' + this.props.match.params.urlTitle)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then(json => {
        this.refsEditor.current.importHtml(json.content);
        this.setState({ title: json.title });
      })
      .catch(console.error);
    }
  }

  toggleEditorPreview = () => {
    // If Editor is being shown, toggle to hide and show preview
    if (this.state.showEditor) {
      this.setState({
        showEditor: false,
        content: this.refsEditor.current.exportHtml(),
      });
    } else {
      this.setState({ showEditor: true });
    }
  };

  saveBlog = () => {
    // Create or update based on url
    const url = '/api/blogs/' + (this.isBlogUpdate ? this.props.match.params.urlTitle : '');

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.refsEditor.current.exportHtml()
      }),
    })
    .then(res => {
      if (!res.ok) {
        console.log(res);
        throw Error(res.statusText);
      }
      this.props.history.push('/blog')  // Redirect on success
    })
    .catch(error => {
      if (error.message === 'Unauthorized') {
        alert(`${error.message}: You are not Zach`);
      } else {
        alert(`${error.message}`);
      }
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'grey', color: 'black', borderRadius: '50%', width: '50px', height: '50px',
      cursor: 'pointer', outline: 'none', position: 'fixed', border: 'none',
      boxShadow: '4px 6px 8px rgba(0, 0, 0, .8)', margin: '15px', fontWeight: 'bold',
    };

    return (
      <div style={{ minHeight: '100vh', color: 'white', backgroundColor: '#3e4d4f'}}>
        <button onClick={() => this.toggleEditorPreview()} style={{...buttonStyle, left: '8px', top: '8px'}}>
          {this.state.showEditor ? "View" : "Edit"}
        </button>
        <button onClick={() => this.saveBlog()} style={{...buttonStyle, left: '8px', bottom: '8px'}}>
          {"Save"}
        </button>
        {/* Hide component without re-render to avoid losing state of Editor */}
        <div style={{padding: '10vw', paddingTop: '5vh',
                     display: this.state.showEditor ? 'block' : 'none'}}>
          <div style={{outline: '2px solid white', padding: '5vw'}}>
            <input type="text" placeholder="<Blog Title>"
              style={{width: '80%', fontSize: '1em', display: 'block', margin: '0 auto', marginTop: '0', marginBottom: '1.7em', padding: '0.6em'}}
              value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}
            />
            <SlateEditor ref={this.refsEditor} />
          </div>
        </div>
        { !this.state.showEditor &&
          <ViewBlog content={this.state.content} title={this.state.title} match={this.props.match} /> }
      </div>
    );
  }
}
