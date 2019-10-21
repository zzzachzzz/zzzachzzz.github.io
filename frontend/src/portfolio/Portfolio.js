import React from 'react';
import { Link } from 'react-router-dom';
import Terminal from './components/Terminal';
import './Portfolio.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './portfolioData';


export default function Portfolio() {
  const projectsRef = React.createRef();

  const scroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="Portfolio">
      <div className="navbar">
        <Link to="/blog">Blog</Link>
        <a href="#projects" onClick={() => scroll(projectsRef)}>
          Projects
        </a>
      </div>
      <div className="ubuntu-terminal-desktop">
        <Terminal />
      </div>
      <h2 ref={projectsRef} className="projects-header">Projects</h2>
      <div className="ubuntu-card-background">
        <div className="cards-container">
          {projects.map((project, i) => <ProjectCard project={project} key={i} />)}
        </div>
      </div>
    </div>
  );
}
