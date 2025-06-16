"use client";
import "./Navbar.css";
import { useState } from "react";

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
                  RESUME{" "}
                  <svg
                    id="download-image"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#101010"
                  >
                    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                  </svg>
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
