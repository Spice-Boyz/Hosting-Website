import React from 'react';
import PlaylistScroller from '../components/PlaylistsScroller'; // go up one level, then into components
import '../components/PlaylistScroller.css'; // CSS file in the same folder

function Main() {
    return (
        
        <main   >
             <div style={{height: "20vh"}}></div>
           
             <div  className="announcement-container">
                <h1>SPICEBOYZ TURNS 1 !</h1>
                <h2>4 events, 4 guys, 2 locations, 1 collab, many mixes, countless connections</h2>
                <p>We want to thank everyone who has bought a ticket from our legwork warriors to our amapiano lovers. Everyone who told a friend and told a friend to tell a friend.</p>
                <p>Everyone who has collabed with us given us an opportunity to work with</p>
                <h3>#SB4L</h3>
            </div>

            <div className = "playlists">
             <h1>Editors Picks:</h1>
             
             <PlaylistScroller />

            </div>

            
            <div className = "playlists">
             <h1>Tickets:</h1>
             
             <EventbriteTicketPage />

            </div>

            <div style={{height: "70vh"}}></div>
        </main>
);
    
}

export default Main;