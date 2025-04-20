import Header from "./Header";
import Main from "./Main";
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
