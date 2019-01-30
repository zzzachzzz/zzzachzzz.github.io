import React, { Component } from 'react';
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
          <div className="statement">
            <div className="input-statement">Input statement</div>
            <div className="return-statement">text text text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
