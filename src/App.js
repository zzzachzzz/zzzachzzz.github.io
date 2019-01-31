import React, { Component } from 'react';
import Terminal from './components/Terminal';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ubuntu-terminal-desktop">
          <div className="App-container">
            <Terminal />
          </div>
        </div>
        <div className="App-container">
          content
        </div>
      </div>
    );
  }
}

export default App;
