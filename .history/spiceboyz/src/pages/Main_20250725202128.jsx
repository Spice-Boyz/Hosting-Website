import PlaylistScroller from '../components/PlaylistsScroller'; // go up one level, then into components
import '../components/PlaylistScroller.css'; // CSS file in the same folder
import '../components/EventBrite'; 
import ReviewWidget from '../components/ReviewWidget';
import EventBrite from '../components/EventBrite';

function Main() {

    return (
        
        <main   >
            <div style={{height: "10vh"}}></div>
           
             <div  className="announcement-container" data-aos="fade-up"> 
                <h2>1 YEAR OF SPICEBOYZ</h2>
                <h3>#SB4L</h3>
                
              
                <p style={{height: "10vh"}}></p>
                <h4>Tickets to next party:</h4>
                    <EventBrite/>
           
            </div>
            
            <div className="review-container" data-aos="fade-up">
                <h3>#SHOW-WORKINGS</h3>
                <ReviewWidget />
            </div>
            
    
            <div className = "playlists" > 
             <h2 >Editors Picks:</h2>
             <PlaylistScroller  />

            </div>

            <div style={{height: "24vh"}}></div>
        </main>
);
    
}

export default Main;