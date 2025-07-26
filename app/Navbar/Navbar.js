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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-336.92 338.46-478.46l28.31-28.77L460-414v-346h40v346l93.23-93.23 28.31 28.77L480-336.92ZM264.62-200q-27.62 0-46.12-18.5Q200-237 200-264.62v-96.92h40v96.92q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h430.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-96.92h40v96.92q0 27.62-18.5 46.12Q723-200 695.38-200H264.62Z" />
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
