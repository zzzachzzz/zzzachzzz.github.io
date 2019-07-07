import React, { Component } from 'react';
import Prism from 'prismjs';
import './prism.css';
import 'prismjs/components/prism-python.js';
import Editor from './components/Editor';


export default class Blog extends Component {
  state = {
    thing: '<p><code>code</code>&lt;script&gt;&lt;/script&gt;</p>'
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  onChange = (value) => {
    this.setState({value});
    console.log(value);
  };

  buttonClick = () => {
    Prism.highlightAll();
    fetch('/api')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  };

  render() {
    return (
      <div>
        <Editor onChange={this.onChange} />
        <pre className="language-javascript">
          <code>
            {code}
          </code>
        </pre>
        <pre>
          <code className="language-python">
            {code2}
          </code>
        </pre>
        <div dangerouslySetInnerHTML={{ __html: this.state.value }} />
        <button onClick={() => this.buttonClick()}>BUTTON</button>
      </div>
    );
  }
}

const code = (
`
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook'
  };
}
`
);

const code2 = (
`
def py_func(self):
    return 'mkay'
`

);
