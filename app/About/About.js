import "./About.css";
import Image from "next/image";

import react from "../assets/react.png";
import next from "../assets/next.png";
import solidity from "../assets/solidity.png";
import js from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

function About() {
  return (
    <>
      <div className="main-heading">ABOUT ME</div>
      <div className="About-container">
        <div className="About-heading">ABOUT.md</div>
        <div className="About-content">
          <ul>
            <li>
              - Second-year B.Tech student majoring in 
              <strong> Artificial Intelligence and Machine Learning</strong>
            </li>
            <li>
              - Based in <strong>Delhi, India</strong>
            </li>
            <li>
              - Actively learning <strong>Java</strong> and building strong
              foundations in <strong>Data Structures and Algorithms</strong>
            </li>
            <li>
              - Passionate about <strong>technology, problem-solving</strong>,
              and continuous self-improvement
            </li>
            <li>
              - Actively exploring the <strong>blockchain</strong> space, with a
              strong interest in smart contract development and decentralized
              systems
            </li>
            <li>
              - <strong> Head of Operations</strong> at Kavyarang, the literary
              society in my college — managing events, coordinating teams, and
              exploring creative expression
            </li>
            <li>
              - Focused on personal growth, learning from past experiences, and
              striving for professionalism in all that I do
            </li>
            <li>
              - Curious, dedicated, and working each day to become a
              well-rounded individual in both tech and leadership
            </li>
          </ul>
        </div>
      </div>
      <div className="skills-heading">
        MY SKILLSET
      </div>
      <div className="skillset-container">
        <div className="skillset">
          <Image src={react} width={70} height={70} alt="React"></Image>
        </div>
        <div className="skillset">
          <Image src={next} width={70} height={70} alt="NextJS"></Image>
        </div>
        <div className="skillset">
          <Image src={solidity} width={70} height={70} alt="Solidity"></Image>
        </div>
        <div className="skillset">
          <Image src={js} width={70} height={70} alt="JavaScript"></Image>
        </div>
        <div className="skillset">
          <Image src={tailwind} width={70} height={70} alt="Tailwind"></Image>
        </div>
        <div className="skillset">
          <Image src={bootstrap} width={70} height={70} alt="Bootstrap"></Image>
        </div>
      </div>
    </>
  );
}

export default About;
