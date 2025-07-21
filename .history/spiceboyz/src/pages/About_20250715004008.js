import React from 'react';
import EventbriteTicketPage from '../components/EventbriteTicketPage'; // go up one level, then into components

import '../components/EventbriteTicketPage'; 
function About() {
    return(
        <section>
        
        <div style={{backgroundColor: 'black'}}></div>
        <div className = "all-four">

        <ul>
            <li>
                <img src="/assets/SPICEBOYZCHROME.png"  className="small-image"  width="450" height="450"/></li>
            
          </ul> 
          
        </div>

         <div className ="aboutus">
            <h1>MISSION STATEMENT !</h1>
            <p>Cultivate an environment suitable for everyone of all different walks </p>
            <p> of life, To feel free, bringing a breath of fresh air to the young saint louis party scene</p>
            <p>I forgot our mission statement</p>
            <h3>#SB4L</h3>
        </div>

         {/* <div className = "tickets">
             <h1>Tickets:</h1>
             
             <EventbriteTicketPage />

            </div> */}
        <div style={{height: "25vh"}}></div>
    </section>

    );
}

export default About;