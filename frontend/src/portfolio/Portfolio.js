import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Terminal from './components/Terminal';
import './Portfolio.css';
import ProjectCard from './components/ProjectCard';


class Portfolio extends Component {
  constructor() {
    super()

    this.projectsRef = React.createRef();
    this.projects = {
      0: {
        title: 'AutomateMyJob',
        body: `
          A program that automates interactions with a web app using Python and Selenium Webdriver.
          It uses the Google Sheets API to parse spreadsheets for information, and translates
          that into a sequence of actions. The functions are run in a Python interactive shell, allowing
          for a hybrid workflow of manual and automated work in a single browser session.`,
        icons: ['python.png', 'selenium.png', 'google_sheets.png'],
        githubLink: 'https://github.com/zzzachzzz/AutomateMyJob'
      },
      1: {
        title: 'Portfolio',
        body: `
          This site, which is built with ReactJS. The typing of statements in the terminal is performed
          by updating the state with each character being added, optimized through the use of
          React.PureComponent and React.memo. This prevents statements that have already been typed
          from re-rendering unnecessarily. Hosted on DigitalOcean.`,
        icons: ['javascript.png', 'react.png', 'digital_ocean.png'],
        githubLink: 'https://github.com/zzzachzzz/portfolio'
      },
      2: {
        title: 'Toonkit.net',
        body: `
          A hub of utilities for the community-maintained Toontown Rewritten and Toontown Corporate Clash.
          Toonkit calls the games' APIs to provide live information about the game. The site's Gag Combo
          Generator is a web app which accepts user input, queries a PostgreSQL database with the provided
          input filters, and returns the appropriate output.`,
        icons: ['python.png', 'flask.png', 'postgreSQL.png', 'digital_ocean.png'],
        githubLink: 'https://github.com/Toonkit/Website'
      },
      3: {
        title: 'LoLWikiQuotes',
        body: `
          A web scraper created with the Beautiful Soup Python module. It scrapes champion quotes from
          the League of Legends Wikia, from 140+ similar but uniquely formatted pages. The app interacts
          with the Riot Games API to retrieve information such as updated champion lists. Scrape one,
          multiple, or all champion pages, depending on command line arguments passed.`,
        icons: ['python.png', 'beautiful_soup.png', 'riot_games_api.png'],
        githubLink: 'https://github.com/zzzachzzz/LoLWikiQuotes'
      },
    }
  }

  scroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      <div className="Portfolio">
        <div className="navbar">
          <Link to="/blog">Blog</Link>
          <a href="#projects" onClick={() => this.scroll(this.projectsRef)}>
            Projects
          </a>
        </div>
        <div className="ubuntu-terminal-desktop">
          <Terminal />
        </div>
        <h2 ref={this.projectsRef} className="projects-header">Projects</h2>
        <div className="ubuntu-card-background">
          <div className="cards-container">
            <ProjectCard project={this.projects[0]} />
            <ProjectCard project={this.projects[1]} />
            <ProjectCard project={this.projects[2]} />
            <ProjectCard project={this.projects[3]} />
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

export default Portfolio;
