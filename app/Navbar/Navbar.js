"use client";
import "./Navbar.css";
import { useState } from "react";
import downloadbutton from "../assets/downloadbutton.png";
import Image from "next/image";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="Nav-container">
        <div className="Navbar">
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#project" onClick={toggleMenu}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                CONNECT WITH ME
              </a>
            </li>
          </ul>
          <ul className="resume">
            <li>
              <a
                href="/Yash Goel - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="resume-text">
                  RESUME
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
