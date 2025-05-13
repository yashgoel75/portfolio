"use client"

import "./About.css";
import Image from "next/image";
import FadeInSection from "../framer-motion";
import react from "../assets/react.png";
import next from "../assets/next.png";
import solidity from "../assets/solidity.png";
import js from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import mongodb from "../assets/mongodb.png";
import viem from "../assets/viem.png";
import metamask from "../assets/metamask.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import vercel from "../assets/vercel.png";

import { useState, useEffect} from "react";

function About() {
  const [isDesktop, setIsDesktop] = useState(true);
  
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 900);
      };
  
      handleResize(); // Run initially
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  const imageStyleDesktop = {
    borderRadius: '50%',
    border: '1px solid #fff',
    height: 70,
    width: 70
  }
  const imageStyleMobile = {
    borderRadius: '50%',
    border: '1px solid #fff',
    height: 50,
    width: 50
  }
  return (
    <>
      <FadeInSection>
        <div className="main-heading">ABOUT ME</div>
      </FadeInSection>

      <FadeInSection>
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
                - <strong>Head of Operations</strong> at Kavyarang, the literary
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
      </FadeInSection>

      <FadeInSection>
        <div className="skills-heading">MY SKILLSET</div>
      </FadeInSection>

      <FadeInSection>
        <div className="skillset-container">
        <div className="skillset">
            <Image src={next} alt="NextJS" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Next.js
          </div>
          <div className="skillset">
            <Image src={react} alt="React" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>React
          </div>
          <div className="skillset">
            <Image src={solidity} alt="Solidity" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Solidity
          </div>
          <div className="skillset">
            <Image src={metamask} alt="MetaMask" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>MetaMask
          </div>
          <div className="skillset">
            <Image src={viem} alt="viem" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Viem
          </div>
          <div className="skillset">
            <Image src={mongodb} alt="MongoDB" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>MongoDB
          </div>
          <div className="skillset">
            <Image src={js} alt="JavaScript" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>JavaScript
          </div>
          <div className="skillset">
            <Image src={tailwind} alt="Tailwind" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Tailwind
          </div>
          <div className="skillset">
            <Image src={bootstrap} alt="Bootstrap" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Bootstrap
          </div>
          <div className="skillset">
            <Image src={github} alt="GitHub" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>GitHub
          </div>
          <div className="skillset">
            <Image src={git} alt="Git" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Git
          </div>
          <div className="skillset">
            <Image src={vercel} alt="Vercel" style={isDesktop ? imageStyleDesktop : imageStyleMobile} />
            <br></br>Vercel
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default About;
