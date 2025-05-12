"use client";

import "./Project.css";
import FadeInSection from "../framer-motion";
import Image from "next/image";
import ipucgpacalc from "../assets/ipucgpacalculator.png";
import walbo from "../assets/walbo.png";
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
                🛠️ <strong>Tech Stack:</strong> HTML, CSS, JavaScript
              </div>
              <div className="project-desc">
                A user-friendly web application designed specifically for
                students of Guru Gobind Singh Indraprastha University (GGSIPU)
                to calculate their CGPA with ease and accuracy. The calculator
                allows students to input their semester SGPA values and
                instantly computes the cumulative CGPA, following the IPU
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
                🛠️ <strong>Tech Stack:</strong> Next.js, MongoDB, Viem,
                MetaMask, Tailwind CSS, Bootstrap
              </div>
              <div className="project-desc">
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
    </>
  );
}

export default Project;
