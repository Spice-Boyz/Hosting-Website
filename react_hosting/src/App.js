
import Home from "./pages/Home";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import videoBg from './assets/italawavideo2.mp4';
import './App.css';

function App() {
  return (
    <div>
      {/*Background (css of this is in index.css not App.css*/}
      <video src = {videoBg} autoPlay loop muted/>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
