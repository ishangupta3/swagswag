import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import VideoPlayer from './components/Video.jsx';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Who from './components/Who';
import Slider from './components/Slider.js';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <VideoPlayer />
      {/* <Hero /> */}
      <Who/>
      <Features />
      <Slider/>
      {/* <Testimonial />
      <CallToAction /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
