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
            <p style={{fontSize: '1.3rem'}}>Hello and welcome! I'm a fresh Computer Science graduate from the scenic campus of the University of North Carolina, Asheville! What started as an interest in technology and creating turned into a passion to solve problems and embark on a path of continuous learning. Over the past 5 years, while working as a bartender at Sierra Nevada Brewing Co., I not only honed my interpersonal skills but also built relationships that paved the way for a Software Development Internship. This opportunity has allowed me to dive deep into the world of automation and database management, with a particular focus on product development within the Ignition platform. In my free time, I have focused on strengthening my skills in JavaScript and React to build a solid foundation in web development. My skills, cultivated through academic learning, professional experience, and personal projects, form a robust toolkit that I'm eager to expand. The tech landscape is ever-evolving, and so am I, continuously learning, growing, and adding new skills to my arsenal. Thank you for stopping by my portfolio. I'm excited about the opportunities that lie ahead and am keen to apply my blend of technical and interpersonal skills in a challenging software development role. I look forward to connecting with fellow tech enthusiasts and potential collaborators. Let's explore how we can innovate together!</p>
                  
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