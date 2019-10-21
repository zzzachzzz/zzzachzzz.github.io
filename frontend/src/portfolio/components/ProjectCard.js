import React from 'react';
import './ProjectCard.css';
import githubLogo from '../assets/github.svg';

export default function ProjectCard(props) {
  const { title, body, icons, githubLink } = props.project;
  return (
    <div className="outer">
      <div className="inner">
        <div className="card-header-container">
          <h2>{title}</h2>
          <a className="github-link" href={githubLink}
            target="_blank" rel="noopener noreferrer">
            <img className="github-logo" src={githubLogo} alt={`GitHub link for ${title}`} />
          </a>
        </div>
        <p>{body}</p>
        <div className="tech-icon-row">
          { icons.map((icon, i) => {return <img src={require(`../assets/${icon}`)} className="tech-icon" key={i} alt="" />}) }
        </div>
      </div>
    </div>
  );
};

