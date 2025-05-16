import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Hero.css";
import ParticlesBackground from "../components/ParticlesBackground"; // Ensure exact case

function Hero() {
  return (
    <div className="Hero">
      
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Hero;
