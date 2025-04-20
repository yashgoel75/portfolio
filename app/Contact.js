"use client";

import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_odesacd", "template_po1r0mh", form.current, {
        publicKey: "JqrTqeIn4fFoo6PAX",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="main-heading">CONNECT WITH ME</div>
      <div className="contact">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-name">
              <label>Name</label>
              <br></br>
              <input
                type="text"
                name="user_name"
                placeholder="What's your Name?"
              />
              <br></br>
            </div>
            <div className="form-email">
              <br></br>
              <label>Email</label>
              <br></br>
              <input
                type="email"
                name="user_email"
                placeholder="What's your Email ID?"
              />
            </div>
            <div className="form-message">
              <br></br>
              <label>Message</label>
              <br></br>
              <textarea name="message" placeholder="What's your Message?" />
            </div>
            <div className="form-button">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div className="or">
          OR<br></br>
        </div>
        <div className="social">
          Drop me a message at:{" "}
          <a href="mailto:connect@yashgoel.me">
            <strong>connect@yashgoel.me</strong>
          </a>
          <div className="separator"></div>
          <div className="Footer-social">
            <strong>LinkedIn: </strong>{" "}
            <a href="https://www.linkedin.com/in/yashgoel75/" target="_blank">
              yashgoel75
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            <strong>GitHub: </strong>
            <a href="https://github.com/yashgoel75" target="_blank">
              yashgoel75
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            <strong>LeetCode: </strong>{" "}
            <a href="https://leetcode.com/u/yashgoel75/" target="_blank">
              yashgoel75
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
