import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="Hero">
        <div className="container">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </>
  );
}
export default Hero;
