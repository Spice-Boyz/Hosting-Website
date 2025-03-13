// import React from 'react';

// class Home extends React.Component{
//     render(){
//         return  <main>
//         <div class ="announcement-container">
//             <h1>SPICEBOYZ TURNS 1 !</h1>
//             <h2>4 events, 4 guys, 2 locations, 1 collab, many mixes, countless connections </h2>
//             <p>We want to thank everyone who has bought a ticket from our legwork warriors to our amapiano lovers. Everyone who told a friend and told a friend to tell a friend.</p>
//             <p>Everyone who has collabed with us given us an opportunity to work with </p>
//             <h3>#SB4L</h3>
//         </div>

//         <div style={{ height: '110vh' }}></div>
//     </main>

//         ;
//     }
// }

// export default Home; 
import React from "react";

const Home = () => {
    console.log("✅ Home component is rendering!");

    return (
        <main>
            <div className="announcement-container">
                <h1>SPICEBOYZ TURNS 1 !</h1>
                <h2>4 events, 4 guys, 2 locations, 1 collab, many mixes, countless connections</h2>
                <p>We want to thank everyone who has bought a ticket, from our legwork warriors to our Amapiano lovers. Everyone who told a friend and told a friend to tell a friend.</p>
                <p>Everyone who has collabed with us, given us an opportunity to work together.</p>
                <h3>#SB4L</h3>
            </div>
        </main>
    );
};

export default Home;
