import "./Footer.css";
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="Footer-container">
        <div className="Footer-content">
          <Image src={logo} width={70} height={70} alt="Yash Goel"></Image>
          <div className="vertical-line"></div>© {new Date().getFullYear()} Yash
          Goel - yashgoel75
        </div>
        <div className="Footer-social">
          <a href="https://www.linkedin.com/in/yashgoel75/" target="_blank">
            <Image src={linkedin} width={30} height={30} alt="LinkedIn"></Image>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/yashgoel75" target="_blank">
            <Image src={github} width={30} height={30} alt="LinkedIn"></Image>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
