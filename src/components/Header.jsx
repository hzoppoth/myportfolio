import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Global.css';
import '../Header.css';

function Header() {
    return (
        <header>
            <nav id="global-div">
                <ul id="nav-items">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                    <li><NavLink to="/aboutme" activeClassName="active">About Me</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
