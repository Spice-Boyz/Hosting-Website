import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';



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
    AOS.init({
      duration: 1000,     
      offset: 100,         
      easing: 'ease-in-out',
      delay: 100
  });
  }, []);

  if (loading) return <Loading />;

  return ( 
      <Router>
        
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
