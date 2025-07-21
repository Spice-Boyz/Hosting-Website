import PlaylistScroller from '../components/PlaylistsScroller'; // go up one level, then into components
import '../components/PlaylistScroller.css'; // CSS file in the same folder
import '../components/EventBrite'; 

function Main() {

    return (
        
        <main   >
            <div style={{height: "20vh"}}></div>
           
             <div  className="announcement-container" data-aos="fade-up"> 
                <h2>SPICEBOYZ TURNS 1 !</h2>
                <h3>#SB4L</h3>
                 <iframe
                src="https://www.instagram.com/p/DIW-yZSSK4h/?img_index=9"
                width="328"
                height="520"
               
                
                allowTransparency={true}
            ></iframe>
                <div className = "Tickets"></div>
                <p style={{height: "10vh"}}></p>
                <h4>Tickets to next party:</h4>
                <p>Eventbrite API</p>
                    <EventBrite /> 
           
            </div>


            <div className = "playlists" > 
             <h2 >Editors Picks:</h2>
             
             <PlaylistScroller  />

            </div>

            <div style={{height: "70vh"}}></div>
        </main>
);
    
}

export default Main;