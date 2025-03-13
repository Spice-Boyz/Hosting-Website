import React from 'react';
import { Link } from "react-router-dom";  // ✅ Import React Router Link

import picture from '../assets/spiceboysicon-removebg-preview.png'; 

class Header extends React.Component{
    render(){
        return ( <header>
        <div className="container">
            <div className="header-logo">
                <a href="main.html">
                    {/* <img src="spiceboysicon-removebg-preview.png" alt="SPICEBOYZ LOGO" /> */}
                    <img src = {picture} alt="SPICEBOYZ LOGO" />
                </a>
            </div >
            <nav>
                <ul>
                    {/* <li><a href="events.html">EVENTS</a></li> */}
                    <li><Link to="/events">EVENTS</Link></li>  {/* ✅ Fixed Links */}
                    <li><Link to="/" className="active">HOME</Link></li>
                    <li><Link to="/media">MEDIA</Link></li>
                    {/* <li><Link to="/media">MEDIA</Link></li> */}
                    
                </ul>
            </nav>
        </div>
    </header>
    ); 
        
    }
}
export default Header; 