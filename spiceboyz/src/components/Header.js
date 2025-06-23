import React from 'react';
import { NavLink , Link } from 'react-router-dom';

function Header() {
    return (
        <header class = "navbar">
        <div class="container">
            <div class="header-logo">
                <Link to="/">
                    <img src="/assets/spiceboysicon-removebg-preview.png" alt="SPICEBOYZ LOGO"/>
                </Link>
            </div >
            <nav>
                <ul>
                    <li><NavLink to="Events">EVENTS</NavLink></li>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="About">ABOUT</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    </header>

    );
}

export default Header;