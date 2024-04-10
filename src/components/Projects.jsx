import React from 'react';
import projects from '../ProjectsData';
import '../Global.css'
import '../Projects.css'

function Projects() {
    return (
        <section id="projects">
            
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <h3>{project.title}</h3> 
                        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Github repository</a>}
                        <h4>Overview</h4>
                        <p>{project.description}</p>
                        <h4>Technologies</h4>
                        <ul>
                            {project.technologies.map((tech =>
                                <li>{tech}</li>
                            ))}
                        </ul>
                        <h4>Features</h4>
                        <ul>
                            {project.features.map((feature =>
                                <li>{feature}</li>
                            ))}
                        </ul>
                        {project.impact && <h4>Impact</h4>}
                        <p>{project.impact}</p>
                        {project.image && <img src={project.image} alt={`${project.title} icon`} className ="project-image" />}

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects