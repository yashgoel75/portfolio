"use client";

import "./Project.css";
import FadeInSection from "../framer-motion";
import Image from "next/image";
import ipucgpacalc from "../assets/ipucgpacalculator.png";
import walbo from "../assets/walbo.png";
import aurika from "../assets/aurika.png";
import { useState, useEffect } from "react";

function Project() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Project 1 */}
      <FadeInSection>
        <div className="main-heading">MY PROJECTS</div>
      </FadeInSection>
      <FadeInSection>
        <div className="projects">
          <div className="project">
            <div className="image-code">
              <div className="project-image">
                <Image
                  src={ipucgpacalc}
                  alt="IPU CGPA Calculator"
                  width={544} // Set a default width (adjust based on your image)
                  height={300} // Set a default height (adjust based on your image)
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="view-code">
                <ul>
                  <li>
                    <a
                      href="https://github.com/yashgoel75/ipu-cgpa-calculator"
                      target="_blank"
                    >
                      View Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ipucgpacalculator.vercel.app"
                      target="_blank"
                    >
                      View Live
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="project-content">
              <div className="project-name">IPU CGPA Calculator</div>
              <div className="project-tech">
                🛠️ <strong>Tech Stack:</strong> HTML • CSS • JavaScript
              </div>
              <div className="project-desc">
                <br></br>A user-friendly web application designed specifically
                for students of Guru Gobind Singh Indraprastha University
                (GGSIPU) to calculate their CGPA with ease and accuracy. The
                calculator allows students to input their semester SGPA values
                and instantly computes the cumulative CGPA, following the IPU
                grading pattern.
              </div>
              <div className="project-features">
                <br></br>
                🔍 <strong>Key Features:</strong> Clean and minimalistic
                interface for a seamless user experience Real-time CGPA
                calculation as you enter SGPA values Error handling for invalid
                or incomplete inputs Responsive design for mobile and desktop
                use Lightweight and fast — no backend required
              </div>
              <div className="purpose">
                <br></br>
                🧠 <strong>Purpose:</strong> This project was built to simplify
                a repetitive and often confusing task for IPU students. It
                reflects my initiative to solve real problems with intuitive,
                efficient solutions using web technologies.
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      {/* Project 2 */}
      <FadeInSection>
        <div className="projects">
          <div className="project">
            <div className="image-code">
              <div className="project-image">
                <Image
                  src={walbo}
                  alt="Walbo"
                  width={544} // Set a default width (adjust based on your image)
                  height={300} // Set a default height (adjust based on your image)
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="view-code">
                <ul>
                  <li>
                    <a
                      href="https://github.com/yashgoel75/walbo"
                      target="_blank"
                    >
                      View Code
                    </a>
                  </li>
                  <li>
                    <a href="https://walbo.yashgoel.me" target="_blank">
                      View Live
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-content">
              <div className="project-name">
                Walbo - Connect with the Decentralized
              </div>
              <div className="project-tech">
                🛠️ <strong>Tech Stack:</strong> Next.js • MongoDB • Viem •
                MetaMask • Tailwind CSS • Bootstrap
              </div>
              <div className="project-desc">
                <br></br>
                Walbo is a Web3 payment platform that makes crypto transactions
                as seamless as UPI by introducing user-friendly Walbo IDs.
                Instead of long wallet addresses, users can register a custom
                Walbo ID and send/receive payments with ease.
              </div>
              <div className="project-features">
                <br></br>
                🔍 <strong>Key Features: </strong>
                Walbo allows users to create their own custom Walbo ID, making
                it easier to send and receive crypto without dealing with long
                wallet addresses. It supports three flexible payment methods —
                using a Walbo ID, saved contacts, or a public key — giving users
                both convenience and choice. The smart contact management system
                makes it simple to add, edit, or delete contacts.<br></br>With
                built-in Walbo ID verification, users can confirm the recipient
                exists before sending any transaction. You can also check your
                wallet balance at any time, and for added security, Walbo
                automatically logs you out when MetaMask is disconnected.
                <br></br>You can view your complete transaction history,
                including incoming payments if the recipient is also a Walbo
                user. Searching through past transactions is quick and easy with
                searchable logs. For a more comfortable user experience, Walbo
                also supports dark mode.
              </div>
              <div className="purpose">
                <br></br>
                🧠 <strong>Purpose:</strong> Walbo is built to make
                decentralized payments feel familiar, fast, and user-friendly —
                just like UPI. It&lsquo;s designed for people who want the power
                of Web3 without the hassle of copying wallet addresses or
                dealing with clunky interfaces. Whether you&lsquo;re sending
                crypto to a friend or managing frequent recipients, Walbo makes
                the process smooth, secure, and simple.
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      {/* Project 3 */}
      <FadeInSection>
        <div className="projects">
          <div className="project">
            <div className="image-code">
              <div className="project-image">
                <Image
                  src={aurika}
                  alt="Aurika"
                  width={544} // Set a default width (adjust based on your image)
                  height={300} // Set a default height (adjust based on your image)
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="view-code">
                <ul>
                  <li>
                    <a
                      href="https://github.com/yashgoel75/aurika"
                      target="_blank"
                    >
                      View Code
                    </a>
                  </li>
                  <li>
                    <a href="https://aurika.yashgoel.me" target="_blank">
                      View Live
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-content">
              <div className="project-name">
                Aurika - Digital Gold on the Blockchain
              </div>
              <div className="project-tech">
                🛠️ <strong>Tech Stack:</strong> Next.js • Solidity • Wagmi •
                RaimbowKit • Viem • Ethers.js • MongoDB • MetaMask • Tailwind
                CSS • Bootstrap
              </div>
              <div className="project-desc">
                <br></br>
                Aurika is a decentralized application that enables users to
                invest in digital gold using SepoliaETH and sell it at real-time
                market prices. Built using Next.js, React, Solidity, MongoDB,
                and a suite of Web3 tools like Viem, Wagmi, and RainbowKit, the
                platform offers a seamless and secure experience for interacting
                with tokenized assets. Two deployed smart contracts manage price
                data and asset tracking, while off-chain user data like email
                and authentication details are securely handled through MongoDB
                and Resend.
              </div>
              <div className="project-features">
                <br></br>
                🔍 <strong>Key Features: </strong>
                Aurika allows users to buy and sell digital gold with real-time
                price conversions between USD, ETH, and XAU. It includes a
                portfolio dashboard that tracks user holdings and live
                profit/loss, a swap mechanism for ETH ↔ Gold, and a robust
                authentication system using email OTP and PIN. The app also
                features full transaction history with Etherscan links available
                both in-app and via email notifications. Security is prioritized
                with off-chain data storage, and the entire user journey is
                supported by responsive design and thoughtful UI/UX built using
                Tailwind CSS.
              </div>
              <div className="purpose">
                <br></br>
                🧠 <strong>Purpose:</strong> The purpose of Aurika is to bridge
                the gap between traditional investments and the decentralized
                financial ecosystem by bringing a familiar asset—gold—into the
                Web3 space. It demonstrates how blockchain technology can offer
                transparency, security, and accessibility in managing real-world
                value digitally. This project showcases my ability to integrate
                smart contracts with full-stack development and design systems
                that are not only functional but user-focused.
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default Project;
