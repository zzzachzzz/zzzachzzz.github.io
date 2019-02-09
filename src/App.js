import React, { Component } from 'react';
import Terminal from './components/Terminal';
// import logo from './logo.svg';
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
information to build a page, and translate that into a sequence of actions. The functions are run in a
Python interactive shell, allowing for a hybrid workflow of manual and automated work in a single
browser session.`,
        icons: ['python.png', 'selenium.png', 'google_sheets.png']
      },
      1: {
        title: 'Toonkit.net',
        body: '',
        icons: ['python.png', 'flask.png', 'postgreSQL.png', 'digital_ocean.png']
      },
      2: {
        title: 'LoLWikiQuotes',
        body: '',
        icons: ['python.png', 'beautiful_soup.png', 'riot_games_api.png']
      },
      3: {
        title: 'Portfolio',
        body: '',
        icons: ['javascript.png', 'react.png', 'digital_ocean.png']
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
