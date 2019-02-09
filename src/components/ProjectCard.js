import React, {memo} from 'react';

function ProjectCard({}) {
  return (
    <div className="outer">
      <div className="inner">
        <h2>Project Title</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        <div className="tech-icon-row">tech-icon-row</div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
