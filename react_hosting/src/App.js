// import Home from "./pages/Home"
// import Header from "./components/Header"; 
// import Footer from "./components/Footer"; 
// // import myBackground from "./assets/italawavideo2.mp4"; 

// import './App.css';

// function App() {
//   return (
//     </div>
//     // <div className="app-container">
//     //  {/* Background Video */} 
//     // <video autoPlay loop muted className="background-video">
//     //   <source src={myBackground} type="video/mp4" />
//     // </video>

//       <Header/>

//       {/*Main Content*/}
//       <Home />

//       {/*Footer*/}
//       <Footer/>
//     </div>
//   );
// }

// export default App;
import Home from "./pages/Home";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import videoBg from './assets/italawavideo2.mp4';
import './App.css';

function App() {
  return (
    <div>
      <video src = {videoBg} autoplay loop muted/>
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
