import React from 'react';
import { Link } from 'react-router-dom';
import '../Global.css'
import '../Header.css'

function Header() {
    return (
        <header>
            <nav id="global-div">
                <ul id="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;