import PlaylistScroller from '../components/PlaylistsScroller'; // go up one level, then into components
import '../components/PlaylistScroller.css'; // CSS file in the same folder
import '../components/EventBrite'; 
import ReviewWidget from '../components/ReviewWidget';
import EventBrite from '../components/EventBrite';

function Main() {

    return (
        
        <main   >
            <div style={{height: "35vh"}}></div>
           
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