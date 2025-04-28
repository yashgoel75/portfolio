"use client";
import GitHubCalendar from "react-github-calendar";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Update isDesktop based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`Hero-container ${isHovered ? "hovered" : ""}`}>
        <div className="header-container">
          <div className="header-buttons">
            <div className="header-red"></div>
            <div className="header-yellow"></div>
            <div className="header-green"></div>
          </div>
          <div className={`Header-content ${isHovered ? "hovered" : ""}`}>
            {isHovered ? (
              <code>
                &lt;html&gt;<br />
                &nbsp;&lt;head&gt;<br />
                &nbsp;&nbsp;&lt;title&gt; Yash Goel &lt;/title&gt;<br />
                &nbsp;&nbsp;&lt;style&gt;<br />
                &nbsp;&nbsp;&nbsp;.content &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; font-size: 50px; text-align: center;
                font-family: &apos;Courier New&apos;, Courier, monospace;<br />
                &nbsp;&nbsp;&nbsp;&#125;<br />
                &nbsp;&nbsp;&nbsp;.name:hover &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; background-color: white;
                color: black; cursor: pointer;<br />
                &nbsp;&nbsp;&nbsp;&#125;<br />
                &nbsp;&nbsp;&lt;/style&gt;<br />
                &nbsp;&lt;/head&gt;<br />
                &nbsp;&lt;body&gt;<br />
                &nbsp;&nbsp;&lt;div class=&quot;content&quot;&gt;<br />
                &nbsp;&nbsp;&nbsp;Hello, I am &lt;span class=&quot;name&quot;&gt;Yash
                Goel&lt;/span&gt;!<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                &nbsp;&lt;/body&gt;<br />
                &lt;/html&gt;
              </code>
            ) : (
              <code>
                &lt;html&gt;<br />
                &nbsp;&lt;head&gt;<br />
                &nbsp;&nbsp;&lt;title&gt; Yash Goel &lt;/title&gt;<br />
                &nbsp;&nbsp;&lt;style&gt;<br />
                &nbsp;&nbsp;&nbsp;.content &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; font-size: 50px; text-align: center;
                font-family: &apos;Courier New&apos;, Courier, monospace;<br />
                &nbsp;&nbsp;&nbsp;&#125;<br />
                &nbsp;&nbsp;&lt;/style&gt;<br />
                &nbsp;&lt;/head&gt;<br />
                &nbsp;&lt;body&gt;<br />
                &nbsp;&nbsp;&lt;div class=&quot;content&quot;&gt;<br />
                &nbsp;&nbsp;&nbsp;Hello, I am Yash Goel!<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                &nbsp;&lt;/body&gt;<br />
                &lt;/html&gt;
              </code>
            )}
          </div>
        </div>
        <div className="main-container">
          <div className="main-content">
            &gt;&gt;&gt; Hello, I am&nbsp;
            <span
              className="name"
              onMouseEnter={() => isDesktop && setIsHovered(true)}
              onMouseLeave={() => isDesktop && setIsHovered(false)}
            >
              Yash Goel
            </span>
            !
          </div>
        </div>
        {/* <GitHubCalendar username="yashgoel75" /> */}

      </div>
    </>
  );
}

export default Main;
