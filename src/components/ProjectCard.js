import React, {memo} from 'react';

function ProjectCard({}) {
  return (
    <div style={cardStyle}>Card #1</div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  width: '100px',
  height: '100px'
}

export default memo(ProjectCard);
