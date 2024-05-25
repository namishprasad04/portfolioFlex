import { useEffect } from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Nav from "./pages/Nav";
import Offer from "./pages/Offer";
import Testimonials from "./pages/Testimonials";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
    });
  }, []);
  return (
    <div>
      <Nav/>
      <HomePage/>
      <About/>
      <Offer/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

