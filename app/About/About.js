"use client";

import "./About.css";
import Image from "next/image";
import FadeInSection from "../framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
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
import vercel from "../assets/vercel.png";
import git from "../assets/git.png";
import reactcolor from "../assets/reactcolor.png";
import nextcolor from "../assets/nextcolor.png";
import soliditycolor from "../assets/soliditycolor.png";
import jscolor from "../assets/jscolor.png";
import tailwindcolor from "../assets/tailwindcolor.png";
import bootstrapcolor from "../assets/bootstrapcolor.png";
import mongodbcolor from "../assets/mongodbcolor.png";
import metamaskcolor from "../assets/metamaskcolor.png";
import githubcolor from "../assets/githubcolor.png";
import gitcolor from "../assets/gitcolor.png";
import wagmi from "../assets/wagmi.png";
import rainbowKit from "../assets/rainbowKit.png";
import rainbowKitColor from "../assets/rainbowKitColor.png";
import ethersjs from "../assets/ethersjs.png";
import ethersjscolor from "../assets/ethersjscolor.png";
import remix from "../assets/remix.png";
import remixColor from "../assets/remixColor.png";
import ethereum from "../assets/ethereum.png";
import ethereumcolor from "../assets/ethereumcolor.png";
import foundry from "../assets/foundry.png";
import pinata from "../assets/pinata.png";
import pinatacolor from "../assets/pinatacolor.png";
import polygon from "../assets/polygon.png";
import polygoncolor from "../assets/polygoncolor.png";
import typescript from "../assets/typescript.png";
import typescriptcolor from "../assets/typescriptcolor.png";

function About() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageStyleDesktop = {
    borderRadius: "50%",
    border: "1px solid #fff",
    height: 70,
    width: 70,
  };

  const imageStyleMobile = {
    borderRadius: "50%",
    border: "1px solid #fff",
    height: 50,
    width: 50,
  };

  const skills = [
    {
      name: "JavaScript",
      defaultSrc: js,
      hoverSrc: jscolor,
      link: "/iiotfile.pdf",
    },
    { name: "TypeScript", defaultSrc: typescript, hoverSrc: typescriptcolor, link: "/iiotfile.pdf" },
    { name: "Solidity", defaultSrc: solidity, hoverSrc: soliditycolor, link: "/iiotfile.pdf" },
    { name: "React", defaultSrc: react, hoverSrc: reactcolor },
    { name: "Next.js", defaultSrc: next, hoverSrc: nextcolor },
    { name: "Tailwind", defaultSrc: tailwind, hoverSrc: tailwindcolor },
    { name: "Bootstrap", defaultSrc: bootstrap, hoverSrc: bootstrapcolor },
    { name: "MongoDB", defaultSrc: mongodb, hoverSrc: mongodbcolor },
    { name: "Ethereum", defaultSrc: ethereum, hoverSrc: ethereumcolor },
    { name: "Polygon", defaultSrc: polygon, hoverSrc: polygoncolor },
    { name: "Foundry", defaultSrc: foundry, hoverSrc: foundry },
    { name: "Remix IDE", defaultSrc: remix, hoverSrc: remixColor },
    { name: "Pinata", defaultSrc: pinata, hoverSrc: pinatacolor },
    { name: "Viem", defaultSrc: viem, hoverSrc: viem },
    { name: "Wagmi", defaultSrc: wagmi, hoverSrc: wagmi },
    { name: "RainbowKit", defaultSrc: rainbowKit, hoverSrc: rainbowKitColor },
    { name: "ethers.js", defaultSrc: ethersjs, hoverSrc: ethersjscolor },
    { name: "MetaMask", defaultSrc: metamask, hoverSrc: metamaskcolor },
    { name: "Git", defaultSrc: git, hoverSrc: gitcolor },
    { name: "GitHub", defaultSrc: github, hoverSrc: githubcolor },
    { name: "Vercel", defaultSrc: vercel, hoverSrc: vercel },
  ];

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
                - Third-year B.Tech student majoring in
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
                - Actively exploring the <strong>blockchain</strong> space, with
                a strong interest in smart contract development and
                decentralized systems
              </li>
              <li>
                - <strong>Head of Operations</strong> at Kavyarang, the literary
                society in my college — managing events, coordinating teams, and
                exploring creative expression
              </li>
              <li>
                - Focused on personal growth, learning from past experiences,
                and striving for professionalism in all that I do
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
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skillset"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ textAlign: "center", cursor: "pointer" }}
            >
              {skill.link ? (
  <Link href={skill.link}>
    <Image
      src={hoveredIndex === index ? skill.hoverSrc : skill.defaultSrc}
      alt={skill.name}
      style={isDesktop ? imageStyleDesktop : imageStyleMobile}
    />
  </Link>
) : (
  <Image
    src={hoveredIndex === index ? skill.hoverSrc : skill.defaultSrc}
    alt={skill.name}
    style={isDesktop ? imageStyleDesktop : imageStyleMobile}
  />
)}
              <br />
              {skill.name}
            </div>
          ))}
        </div>
      </FadeInSection>
    </>
  );
}

export default About;
