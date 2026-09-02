import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import SecondPart from "../src/old-pages/SecondPart";
import ThirdPart from "../src/old-pages/ThirdPart";
import FourthPart from "../src/old-pages/FourthPart";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-100 to-purple-100 scroll-smooth">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <SecondPart />
      </div>

      <div id="work">
        <ThirdPart />
      </div>

      <div id="contact">
        <FourthPart />
      </div>
    </div>
  );
}