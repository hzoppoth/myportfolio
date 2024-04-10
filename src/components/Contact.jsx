import React from 'react';
import contacts from '../ContactData'
import '../Global.css'
import '../Contacts.css'

function Contact() { 

    const handleClick = (link) => {
        window.location.href = link;
    }
    return (
        <div id="global-div" className="contact-container">
            <h1>Hunter Zoppoth</h1>
            <h3>Software Developer</h3>
            {contacts.map((contact =>
                <div key={contact.id} className="contact-container">
                {contact.image && <img src={contact.image} alt={`${contact.title} icon`} style={{maxWidth: '35px'}}/>}
                {contact.link && <button onClick={() => handleClick(contact.link)} className="contact-button">{contact.title}</button>}
                {!contact.link && <p>{contact.title} {contact.text}</p>}
                </div> 
            ))}
        </div>
    );
}

export default Contact