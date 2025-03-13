
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import videoBg from "./assets/italawavideo2.mp4";
import "./App.css";

function App() {
  return (
    <div>
      {/* Background Video */}
      <video src={videoBg} autoPlay loop muted />

      <Router>
        {/* Header */}
        <Header />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Media Route (use a different path) */}
          <Route path="/media" element={<Media />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
