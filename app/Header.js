import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-buttons">
          <div className="header-red"></div>
          <div className="header-yellow"></div>
          <div className="header-green"></div>
        </div>
        <div className="header-content">
          <code>
            &lt;html&gt;<br></br>
            &nbsp;&lt;head&gt;<br></br>
            &nbsp;&nbsp;&lt;title&gt; Yash Goel &lt;/title&gt;<br></br>
            &nbsp;&nbsp;&lt;style&gt;<br></br>
            &nbsp;&nbsp;&nbsp;.content &#123;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; font-size: 50px; text-align: center;
            font-family: &apos;Courier New&apos;, Courier, monospace;<br></br>
            &nbsp;&nbsp;&nbsp;&#125;<br></br>
            &nbsp;&nbsp;&lt;/style&gt;<br></br>
            &nbsp;&lt;/head&gt;<br></br>
            &nbsp;&lt;body&gt;<br></br>
            &nbsp;&nbsp;&lt;div class=&ldquo;content&ldquo;&gt;<br></br>
            &nbsp;&nbsp;&nbsp;Hello, I am Yash Goel!<br></br>
            &nbsp;&nbsp;&lt;/div&gt;<br></br>
            &nbsp;&lt;/body&gt;<br></br>
            &lt;/html&gt;
          </code>
        </div>
      </div>
    </>
  );
}

export default Header;
