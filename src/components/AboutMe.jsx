import React from 'react';
import skills from '../SkillsData'
import refs from '../RefData'
import '../Global.css'
import '../AboutMe.css'

function AboutMe() {
    return (
        <div>
            <section id="about-me">
            <div className="about-me-container" id="global-div">
            <p style={{fontSize: '1.3rem'}}>Hello! I'm a recent Computer Science graduate from the University of North Carolina, Asheville, where I developed a passion for technology and problem-solving. While working as a bartender at Sierra Nevada Brewing Co., I enhanced my interpersonal skills and built valuable relationships that led to a Software Development Internship. Thanks for visiting my portfolio—I'm excited to connect and explore innovative opportunities together!</p>
                  
            </div>
            <h2 className="global-header">Skills</h2>
            <div className="skills-container">
                {skills.map((skill =>
                <div key={skill.id} className="skill">
                <h3>{skill.title}</h3>
                {skill.image && <img src={skill.image} alt={`${skill.title} icon`} className ="skill-image" style={{maxWidth: '150px'}}/>}
                </div>
                ))}
            </div>
            <h2 className="global-header">References</h2>
            <div className="ref-container">
                {refs.map((reff =>
                <div key={reff.id} className="ref">
                <h2>{reff.name}</h2>
                <h4>{reff.title}</h4>
                <h4>{reff.company}</h4>
                <p>{reff.email}</p>
                <p>{reff.phone}</p>
                </div>))}

            </div>
            </section>
        </div>
        
    );
}

export default AboutMe