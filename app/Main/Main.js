"use client";
import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./Main.css";

function Main() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderHighlightedCode = () => (
    <code>
      <span style={{ color: "#82aaff" }}>&lt;html&gt;</span>
      <br />
      &nbsp;<span style={{ color: "#82aaff" }}>&lt;head&gt;</span>
      <br />
      &nbsp;&nbsp;<span style={{ color: "#82aaff" }}>&lt;title&gt;</span>
      <span> Yash Goel </span>
      <span style={{ color: "#82aaff" }}>&lt;/title&gt;</span>
      <br />
      &nbsp;&nbsp;<span style={{ color: "#82aaff" }}>&lt;style&gt;</span>
      <br />
      &nbsp;&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>.content </span>
      &#123;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#9cdcfe" }}>font-size</span>:&nbsp;
      <span style={{ color: "#b5cea8" }}>50px</span>;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#9cdcfe" }}>text-align</span>:&nbsp;
      <span style={{ color: "#b5cea8" }}>center</span>;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#9cdcfe" }}>font-family</span>:&nbsp;
      <span style={{ color: "#ce9178" }}>&#39;Courier New&#39;</span>, Courier,
      monospace;
      <br />
      &nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>.name </span>&#123;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#9cdcfe" }}>transition</span>:&nbsp;
      <span style={{ color: "#b5cea8" }}>0.3s ease</span>;<br />
      &nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>.name:hover </span>
      &#123;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#9cdcfe" }}>background-color</span>:&nbsp;
      <span style={{ color: "#ce9178" }}>white</span>;&nbsp;
      <span style={{ color: "#9cdcfe" }}>
        color
      </span>: <span style={{ color: "#ce9178" }}>black</span>;&nbsp;
      <span style={{ color: "#9cdcfe" }}>
        cursor
      </span>: <span style={{ color: "#ce9178" }}>pointer</span>;<br />
      &nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;<span style={{ color: "#82aaff" }}>&lt;/style&gt;</span>
      <br />
      &nbsp;<span style={{ color: "#82aaff" }}>&lt;/head&gt;</span>
      <br />
      &nbsp;<span style={{ color: "#82aaff" }}>&lt;body&gt;</span>
      <br />
      &nbsp;&nbsp;<span style={{ color: "#82aaff" }}>&lt;div </span>
      <span style={{ color: "#9cdcfe" }}>class</span>=
      <span style={{ color: "#ce9178" }}>&quot;content&quot;</span>
      <span style={{ color: "#82aaff" }}>&gt;</span>
      <br />
      &nbsp;&nbsp;&nbsp;Hello, I am&nbsp;
      <span style={{ color: "#82aaff" }}>&lt;span </span>
      <span style={{ color: "#9cdcfe" }}>class</span>=
      <span style={{ color: "#ce9178" }}>&quot;name&quot;</span>
      <span style={{ color: "#82aaff" }}>&gt;</span>Yash Goel
      <span style={{ color: "#82aaff" }}>&lt;/span&gt;</span>!<br />
      &nbsp;&nbsp;<span style={{ color: "#82aaff" }}>&lt;/div&gt;</span>
      <br />
      &nbsp;<span style={{ color: "#82aaff" }}>&lt;/body&gt;</span>
      <br />
      <span style={{ color: "#82aaff" }}>&lt;/html&gt;</span>
    </code>
  );

  const renderPlainCode = () => (
    <code>
      &lt;html&gt;
      <br />
      &nbsp;&lt;head&gt;
      <br />
      &nbsp;&nbsp;&lt;title&gt; Yash Goel &lt;/title&gt;
      <br />
      &nbsp;&nbsp;&lt;style&gt;
      <br />
      &nbsp;&nbsp;&nbsp;.content &#123;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;font-size: 50px;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;text-align: center;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;font-family: &#39;Courier New&#39;, Courier, monospace;
      <br />
      &nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&nbsp;.name &#123;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;transition: 0.3s ease;
      <br />
      &nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&nbsp;.name:hover &#123;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;background-color: white;
      color: black;
      cursor: pointer;
      <br />
      &nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&lt;/style&gt;
      <br />
      &nbsp;&lt;/head&gt;
      <br />
      &nbsp;&lt;body&gt;
      <br />
      &nbsp;&nbsp;&lt;div class=&quot;content&quot;&gt;
      <br />
      &nbsp;&nbsp;&nbsp;Hello, I am &lt;span class=&quot;name&quot;&gt;Yash
      Goel&lt;/span&gt;!
      <br />
      &nbsp;&nbsp;&lt;/div&gt;
      <br />
      &nbsp;&lt;/body&gt;
      <br />
      &lt;/html&gt;
    </code>
  );

  const renderMobileCode = () => (
    <code>
      &lt;html&gt;<br />
      &nbsp;&lt;head&gt;<br />
      &nbsp;&nbsp;&lt;title&gt; Yash Goel &lt;/title&gt;<br />
      &nbsp;&nbsp;&lt;style&gt;<br />
      &nbsp;&nbsp;&nbsp;.content &#123; font-size: 32px; text-align: center; font-family: &apos;Courier New&apos;, Courier, monospace; &#125;<br />
      &nbsp;&nbsp;&lt;/style&gt;<br />
      &nbsp;&lt;/head&gt;<br />
      &nbsp;&lt;body&gt;<br />
      &nbsp;&nbsp;&lt;div class=&quot;content&quot;&gt;<br />
      &nbsp;&nbsp;&nbsp;Hello, I am Yash Goel!<br />
      &nbsp;&nbsp;&lt;/div&gt;<br />
      &nbsp;&lt;/body&gt;<br />
      &lt;/html&gt;
    </code>
  );

  return (
    <div className="Hero-container">
      <div className="header-container">
        <div className="header-buttons">
          <div className="header-red" />
          <div className="header-yellow" />
          <div className="header-green" />
        </div>

        <div
          className="Header-content"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isDesktop
            ? isHovered
              ? renderHighlightedCode()
              : renderPlainCode()
            : renderMobileCode()}
        </div>
      </div>

      <div className="main-container">
        <div className="main-content">
          &gt;&gt;&gt; Hello, I am <span className="name">Yash Goel</span>!
        </div>
      </div>

      {/* <GitHubCalendar username="yashgoel75" /> */}
    </div>
  );
}

export default Main;
