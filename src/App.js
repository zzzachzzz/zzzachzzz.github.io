import React, { Component } from 'react';
import Terminal from './components/Terminal';
// import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard';

class App extends Component {
  constructor() {
    super()
    this.projectsRef = React.createRef();
  }

  scroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div className="App">
        <div className="ubuntu-terminal-desktop">
          <div className="container">
            <Terminal />
          </div>
        </div>
        <div className="navbar">
          <a onClick={() => this.scroll(this.projectsRef)}>
            {arrow}
          </a>
        </div>
        <h2 style={{textAlign: 'center'}}>Projects</h2>
        <div className="ubuntu-card-background">
          <div className="cards-container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
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
