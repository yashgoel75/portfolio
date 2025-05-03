"use client";
import GitHubCalendar from "react-github-calendar";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {

  return (
    <>
      <div className={"Hero-container"}>
        <div className="header-container">
          <div className="header-buttons">
            <div className="header-red"></div>
            <div className="header-yellow"></div>
            <div className="header-green"></div>
          </div>
          <div className={"Header-content"}>
              <code>
                &lt;html&gt;<br />
                &nbsp;&lt;head&gt;<br />
                &nbsp;&nbsp;&lt;title&gt; Yash Goel &lt;/title&gt;<br />
                &nbsp;&nbsp;&lt;style&gt;<br />
                &nbsp;&nbsp;&nbsp;.content &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; font-size: 50px; text-align: center;
                font-family: &apos;Courier New&apos;, Courier, monospace;<br />
              &nbsp;&nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;&nbsp;.name &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp; transition: 0.3s ease<br />
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
          </div>
        </div>
        <div className="main-container">
          <div className="main-content">
            &gt;&gt;&gt; Hello, I am&nbsp;
            <span
              className="name"
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
