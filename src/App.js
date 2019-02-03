import React, { Component } from 'react';
import Terminal from './components/Terminal';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ubuntu-terminal-desktop">
          <div className="container">
            <Terminal />
          </div>
        </div>
        <div className="navbar">
          <a href="#projects">
            {arrow}
          </a>
        </div>
      </div>
    );
  }
}

const arrow = (
  <React.Fragment>
    \\&nbsp;&nbsp;//<br/>
    &nbsp;\\//<br/>
    &nbsp;&nbsp;\/<br/>
  </React.Fragment>)

export default App;
