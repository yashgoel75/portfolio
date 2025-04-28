import "./Footer.css"
import Image from "next/image"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"


function Footer() {
    return (
        <>
            <div className="Footer-container">
                <div className="Footer-content">© {new Date().getFullYear()} Yash Goel - yashgoel75</div>
                <div className="Footer-social">
                    <a href="https://www.linkedin.com/in/yashgoel75/" target="_blank"><Image src={linkedin} width={30} height={30} alt="LinkedIn"></Image></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/yashgoel75" target="_blank"><Image src={github} width={30} height={30} alt="LinkedIn"></Image></a>
                </div>
            </div>
        </>
    )
}

export default Footer