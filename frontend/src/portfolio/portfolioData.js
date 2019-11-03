export const projects = [
  {
    title: 'Portfolio',
    body: `
      This site, which is built with ReactJS. Originally built with class based components, all the source has been updated to use React Hooks and functional components. The typing of statements in the terminal is performed
      by updating the state with each character being added, optimized through the use of
      React.memo. The blog post editor was custom made with SlateJS. The server was made
      with Express and MongoDB, and uses Passport to authenticate myself as the admin using a Google login.
      `,
    icons: ['javascript.png', 'react.png', 'express.png', 'node.png', 'mongo.png', 'slate.png'],
    githubLink: 'https://github.com/zzzachzzz/portfolio'
  },
  {
    title: 'AutomateMyJob',
    body: `
      A program that automates interactions with a web app using Python and Selenium Webdriver.
      It uses the Google Sheets API to parse spreadsheets for information, and translates
      that into a sequence of actions. The functions are run in a Python interactive shell, allowing
      for a hybrid workflow of manual and automated work in a single browser session.`,
    icons: ['python.png', 'selenium.png', 'google_sheets.png'],
    githubLink: 'https://github.com/zzzachzzz/AutomateMyJob'
  },
  {
    title: 'Toonkit.net',
    body: `
      A hub of utilities for the community-maintained Toontown Rewritten and Toontown Corporate Clash.
      Toonkit calls the games' APIs to provide live information about the game. The site's Gag Combo
      Generator is a web app which accepts user input, queries a PostgreSQL database with the provided
      input filters, and returns the appropriate output.`,
    icons: ['python.png', 'flask.png', 'postgreSQL.png', 'digital_ocean.png'],
    githubLink: 'https://github.com/Toonkit/Website'
  },
  {
    title: 'LoLWikiQuotes',
    body: `
      A web scraper created with the Beautiful Soup Python module. It scrapes champion quotes from
      the League of Legends Wikia, from 140+ similar but uniquely formatted pages. The app interacts
      with the Riot Games API to retrieve information such as updated champion lists. Scrape one,
      multiple, or all champion pages, depending on command line arguments passed.`,
    icons: ['python.png', 'beautiful_soup.png', 'riot_games_api.png'],
    githubLink: 'https://github.com/zzzachzzz/LoLWikiQuotes'
  },
];
