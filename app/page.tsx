import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-100 to-purple-100 scroll-smooth">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="work">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}