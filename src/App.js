import React, { Component } from 'react';
import Terminal from './components/Terminal';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header></header>
          <Terminal />
        </div>
      </div>
    );
  }
}

export default App;
