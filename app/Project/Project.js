"use client"

import "./Project.css";
import FadeInSection from "../framer-motion";
import Image from "next/image";
import ipucgpacalc from "../assets/ipucgpacalculator.png";
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
                
                fill
    style={{ objectFit: "contain"}}
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
              A user-friendly web application designed specifically for students
              of Guru Gobind Singh Indraprastha University (GGSIPU) to calculate
              their CGPA with ease and accuracy. The calculator allows students
              to input their semester SGPA values and instantly computes the
              cumulative CGPA, following the IPU grading pattern.
            </div>
            <div className="project-features">
              <br></br>
              🔍 <strong>Key Features:</strong> Clean and minimalistic interface
              for a seamless user experience Real-time CGPA calculation as you
              enter SGPA values Error handling for invalid or incomplete inputs
              Responsive design for mobile and desktop use Lightweight and fast
              — no backend required
            </div>
            <div className="purpose">
              <br></br>
              🧠 <strong>Purpose:</strong> This project was built to simplify a
              repetitive and often confusing task for IPU students. It reflects
              my initiative to solve real problems with intuitive, efficient
              solutions using web technologies.
            </div>
          </div>
        </div>
        </div>
        </FadeInSection>
    </>
  );
}

export default Project;
