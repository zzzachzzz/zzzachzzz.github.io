import React, {memo} from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  const {title, body, icons} = props.project;
  return (
    <div className="outer">
      <div className="inner">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="tech-icon-row">
          { icons.map((icon) => {return <img src={require(`../assets/${icon}`)} className="tech-icon" />}) }
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
