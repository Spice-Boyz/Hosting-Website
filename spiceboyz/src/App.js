import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './components/Loading';



import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Events from './pages/Events';
import About from './pages/About';
import './App.css';


function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 4500);
  }, []);

  if (loading) return <Loading />;

  return ( 
      <Router>
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
        <Header />

        <Routes> 
          <Route path="/"       element={<Main />}   />
          <Route path="/about"  element={<About />}  />
          <Route path="/events" element={<Events />} />
        </Routes>
        
        <Footer />

      </Router>
     
  );
}



export default App;
