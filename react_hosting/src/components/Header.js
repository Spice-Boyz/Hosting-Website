import React from 'react';

class Header extends React.Component{
    render(){
        return ( <header>
        <div class="container">
            <div class="header-logo">
                <a href="main.html">
                    <img src="spiceboysicon-removebg-preview.png" alt="SPICEBOYZ LOGO" />
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