import React, { Component } from 'react';
import Typer from './Typer';
import './Terminal.css';

class Terminal extends Component {
  render() {
    return (
      <div>
        <div className="terminal-header">
          <div className="terminal-header-btn header-btn1"></div>
          <div className="terminal-header-btn header-btn2"></div>
          <div className="terminal-header-btn header-btn3"></div>
          <div className="header-text">zach@penguin</div>
        </div>
        <div className="terminal-window">
          <Typer />
        </div>
      </div>
    );
  }
}

export default Terminal;
