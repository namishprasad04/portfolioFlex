import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Nav from "./pages/Nav";
import Offer from "./pages/Offer";
import Testimonials from "./pages/Testimonials";


function App() {
  return (
    <div>
      <Nav/>
      <HomePage data-aos="fade-right"/>
      <About/>
      <Offer/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

