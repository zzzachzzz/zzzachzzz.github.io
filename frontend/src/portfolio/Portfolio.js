import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Terminal from './components/Terminal';
import './Portfolio.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './portfolioData';


export default function Portfolio() {
  const projectsRef = React.createRef();

  const scroll = (ref, e) => {
    e.preventDefault();
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="Portfolio">
      <Helmet>
        <title>{'{ zrose.info }'}</title>
      </Helmet>
      <div className="navbar">
        <Link to="/blog">Blog</Link>
        <a href="#projects" onClick={e => scroll(projectsRef, e)}>
          Projects
        </a>
      </div>
      <div className="ubuntu-terminal-desktop">
        <Terminal />
      </div>
      <h2 ref={projectsRef} id="projects" className="projects-header">Projects</h2>
      <div className="ubuntu-card-background">
        <div className="cards-container">
          {projects.map((project, i) => (
            <React.Fragment key={i}>
              <ProjectCard project={project} />
              <div style={{background: '#3e4d4f', height: '50px', width: '100%'}} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
