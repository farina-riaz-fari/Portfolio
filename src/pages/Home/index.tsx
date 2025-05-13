import Navbar from "../../components/Navbar";
import FirstPart from "../FirstPart";
import FourthPart from "../FourthPart";
import SecondPart from "../SecondPart";
import ThirdPart from "../ThirdPart";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-100 to-purple-100 scroll-smooth">
      <Navbar />
      <div id="home">
        <FirstPart />
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
};

export default Home;
