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
                  width={544}
                  height={300}
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
                🛠️ <strong>Tech Stack:</strong> HTML • CSS • JavaScript • Bootstrap
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
                  width={544}
                  height={300}
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
                🛠️ <strong>Tech Stack:</strong> Next.js • JavaScript • MongoDB • Viem •
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
                  width={544}
                  height={300}
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
                🛠️ <strong>Tech Stack:</strong> Next.js • JavaScript • Solidity • Wagmi •
                RainbowKit • Viem • Ethers.js • MongoDB • MetaMask • Tailwind
                CSS
              </div>
              <div className="project-desc">
                <br></br>
                Aurika is a full-stack decentralized application that allows
                users to buy, sell, and gift digital gold using SepoliaETH, all
                at live market prices. The platform is built using Next.js,
                React, Solidity, MongoDB, and modern Web3 tools like Viem,
                Wagmi, and RainbowKit. It features two deployed smart contracts
                — one for real-time price feeds (USD/ETH → XAU) and another for
                secure on-chain tracking of gold and ETH holdings. User data
                such as email and authentication details are handled securely
                off-chain using MongoDB and Resend.
              </div>
              <div className="project-features">
                <br></br>
                🔍 <strong>Key Features: </strong>
                Aurika provides real-time ETH ↔ Gold price conversion, with an
                intuitive portfolio dashboard to monitor current holdings and
                profit/loss. The platform also supports gifting digital gold to
                other users, with visual indicators in transaction history for
                sent (red) and received (green) gifts. Users can sort
                transactions, view Etherscan links both in-app and via email,
                and authenticate using PIN + OTP verification. A fully
                integrated wallet/session management system (via RainbowKit)
                lets users disconnect wallets or logout to return to the secure
                PIN login. The interface supports dark mode, ensuring a
                consistent and accessible experience across environments.
              </div>
              <div className="purpose">
                <br></br>
                🧠 <strong>Purpose:</strong> Aurika is built to merge the
                timeless trust of gold with the transparency and
                decentralization of blockchain. It reimagines how we can store,
                send, and monitor real-world value digitally — in a
                user-friendly and secure way. This project reflects my ability
                to design and implement scalable Web3 solutions, write and
                refactor smart contracts, and focus deeply on user experience
                and product polish.
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}

export default Project;
