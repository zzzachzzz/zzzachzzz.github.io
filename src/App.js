import React, { Component } from 'react';
import Terminal from './components/Terminal';
import './App.css';
import ProjectCard from './components/ProjectCard';

class App extends Component {
  constructor() {
    super()
    this.projectsRef = React.createRef();
    this.projects = {
      0: {
        title: 'AutomateMyJob',
        body: `Developed a program that utilizes Selenium Webdriver to automate interactions with a web app used to 
        build web pages. It is used in conjunction with the Google Sheets API to parse for the necessary
        `,
        icons: ['python.png', 'selenium.png', 'google_sheets.png'],
        githubLink: 'https://github.com/zzzachzzz/AutomateMyJob'
      },
      1: {
        title: 'Toonkit.net',
        body: '',
        icons: ['python.png', 'flask.png', 'postgreSQL.png', 'digital_ocean.png'],
        githubLink: 'https://github.com/Toonkit/Website'
      },
      2: {
        title: 'LoLWikiQuotes',
        body: '',
        icons: ['python.png', 'beautiful_soup.png', 'riot_games_api.png'],
        githubLink: 'https://github.com/zzzachzzz/LoLWikiQuotes'
      },
      3: {
        title: 'Portfolio',
        body: '',
        icons: ['javascript.png', 'react.png', 'digital_ocean.png'],
        githubLink: 'https://github.com/zzzachzzz/portfolio'
      }
    }
  }

  scroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div className="App">
        <div className="ubuntu-terminal-desktop">
          <Terminal />
          {/* <div className="container"> */}
          {/*   <Terminal /> */}
          {/* </div> */}
        </div>
        <div className="navbar">
          <a href="#projects" onClick={() => this.scroll(this.projectsRef)}>
            {arrow}
          </a>
        </div>
        <h2 ref={this.projectsRef} className="projects-header">Projects</h2>
        <div className="ubuntu-card-background">
          <div className="cards-container">
            <ProjectCard project={this.projects[0]} />
            <ProjectCard project={this.projects[1]} />
            <ProjectCard project={this.projects[2]} />
            <ProjectCard project={this.projects[3]} />
            {/* <ProjectCard /> */}
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
