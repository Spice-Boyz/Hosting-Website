import React from 'react';

function About() {
    return(
        <section>
        <video
          id="background-video"
          autoPlay
          muted
          loop
          style={{
            position: 'fixed',
            right: 0,
            bottom: 0,
            minWidth: '100%',
            minHeight: '100%',
            zIndex: -1
          }}
        >
          <source src="/assets/italawavideo2.mp4" type="video/mp4" />
          
        </video>
        <div style={{backgroundColor: 'black'}}></div>
        <div style={{height: "25vh"}}></div>
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
        <div style={{height: "25vh"}}></div>
    </section>

    );
}

export default About;