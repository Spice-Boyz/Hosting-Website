import React from 'react';
import picture from '../assets/spiceboysicon-removebg-preview.png'; 

class Header extends React.Component{
    render(){
        return ( <header>
        <div class="container">
            <div class="header-logo">
                <a href="main.html">
                    {/* <img src="spiceboysicon-removebg-preview.png" alt="SPICEBOYZ LOGO" /> */}
                    <img src = {picture} alt="SPICEBOYZ LOGO" />
                </a>
            </div >
            <nav>
                <ul>
                    <li><a href="events.html">EVENTS</a></li>
                    <li><a href="main.html" class="active">  HOME </a></li>
                    <li><a href="media.html">MEDIA</a></li>
                    
                </ul>
            </nav>
        </div>
    </header>
    ); 
        
    }
}
export default Header; 