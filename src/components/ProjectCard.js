import React, {memo} from 'react';
import './ProjectCard.css';
import githubLogo from '../assets/github.svg';

function ProjectCard(props) {
  const {title, body, icons} = props.project;
  return (
    <div className="outer">
      <div className="inner">
        <div className="card-header-container">
          <h2>{title}</h2>
          <a className="github-link" href={`https://github.com/zzzachzzz/${title}`}
            target="_blank" rel="noopener noreferrer">
            <img className="github-logo" src={githubLogo} />
          </a>
        </div>
        <p>{body}</p>
        <div className="tech-icon-row">
          { icons.map((icon) => {return <img src={require(`../assets/${icon}`)} className="tech-icon" />}) }
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
