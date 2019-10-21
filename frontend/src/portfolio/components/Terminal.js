import React from 'react';
import Typer from './Typer';
import './Terminal.css';

export default function Terminal() {
  return (
    <div className="Terminal">
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
