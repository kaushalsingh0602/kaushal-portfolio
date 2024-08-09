import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About />
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Certification/>
      <Contact/>
      <Footer/>
    </>
  )
}