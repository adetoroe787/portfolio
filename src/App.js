import React, {useEffect} from "react";
import About from "./components/home/About";
import Cards from "./components/home/Cards";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import Skills from "./components/home/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm: px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Cards />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
