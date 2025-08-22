import { useEffect, useRef } from "react";
import PlaylistScroller from '../components/PlaylistsScroller'; // go up one level, then into components
import '../components/PlaylistScroller.css'; // CSS file in the same folder
import '../components/EventBrite'; 
import ReviewWidget from '../components/ReviewWidget';
import EventBrite from '../components/EventBrite';

function Main() {
    const tickRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("tickcounter-sdk")) {
      const s = document.createElement("script");
      s.id = "tickcounter-sdk";
      s.src = "https://www.tickcounter.com/static/js/loader.js";
      document.body.appendChild(s);
    } else {
      if (window.tc_widgetloader && typeof window.tc_widgetloader.load === "function") {
        window.tc_widgetloader.load();
      }
    }
  }, []);

    return (
        
        <main   >
            <div style={{height: "25vh"}}></div>

            <div style ={{}} className = "Countdown">
                <a
                    ref={tickRef}
                    data-type="countdown"
                    data-name="LASGIDI PREP BEGINS IN:"
                    data-bg_color="#000000ff"
                    data-name_color="#f6682f"
                    data-border_color="#fafafaff"
                    data-digits_color = "#f8efefff"
                    data-last_unit_color = "#f6682f"
                    
                    data-font = "Courier New"
                    data-dt="2025-08-29 22:00"
                    data-timezone="America/Chicago"
                    className="tickcounter"
                    href="https://www.tickcounter.com"
                    style={{ display: "block", width: "50%", position: "relative", paddingBottom: "25%" , textAlign: "center", color: "white", backgroundColor: "black" , marginLeft: "26%"}}
                >
                    Countdown
                </a>
            </div>

            <div style={{height: "15vh"}}></div>
           
             <div  className="announcement-container" data-aos="fade-up"> 
                <div style={{height: "15vh"}}></div>
                <EventBrite/>
                
                
            </div>
            <div style={{height: "10vh"}}></div>
            
            <div style={{marginTop: "50px"}} className="review-container" data-aos="fade-up">
                <h3>#SHOW-WORKINGS</h3>
                <ReviewWidget />
            </div>

            <div className = "playlists" > 
             <h2 >Editors Picks:</h2>
             <h5 style = {{ color: "grey", fontSize: "small"}}>Get ready for Back to School, with tunes to kick of your fall semester , Lasgidi PREP is here</h5>
             <PlaylistScroller  />

            </div>

            <div style={{height: "24vh"}}></div>
        </main>
);
    
}

export default Main;