import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function ReadMe({ title, link, desc }) {
  const containerRef = useRef(null);
  const calendarWrapperRef = useRef(null);
  const [blockSize, setBlockSize] = useState(14);
  const blockMargin = 2;
  const minBlockSize = 6; // minimum block size

  useEffect(() => {
    if (!calendarWrapperRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const width = calendarWrapperRef.current.offsetWidth;
      const weeks = 53; // GitHub contributions chart has ~53 weeks
      const calculatedSize = Math.max(
        Math.floor((width - weeks * blockMargin) / weeks),
        minBlockSize
      );
      setBlockSize(calculatedSize);
    });

    resizeObserver.observe(calendarWrapperRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return ( 
    <div
      ref={containerRef}
      style={{
        margin: "10px",
        padding: "5px",
        border: "2px solid #dddddd8e",
        borderRadius: "8px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h4 style={{ marginBottom: "4px", marginTop: "0" }}>
          <a
            href={link}
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            {title}
          </a>
        </h4>
      <div
        style={{
          marginTop: "5px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>Computer Science graduate from Lancaster University</h5>

        <h5 style={{ textAlign: "left", marginTop: "0" }}><br/>🧠 About Me</h5>
        {desc && (
          <p
            style={{
              margin: "8px 0 12px 0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              color: "#eee",
              fontWeight: "300",
              whiteSpace: "pre-line",
              textAlign: "left"
            }}
          >
            {desc}
          </p>
        )}


        <h5 style={{ textAlign: "left", marginTop: "0" }}>🧠 Languages & Tools</h5>


        <p style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
        </p>

        {/* Calendar wrapper at 80% width */}
        <div
          ref={calendarWrapperRef}
          style={{
            width: "95%",
            margin: "0 auto", // center horizontally
            transition: "all 0.3s ease",
            contentAlign: "center",
          }}
        >
        <GitHubCalendar
            username="Kyrylo234"
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={Math.max(blockSize * 1.1, 10)}
            color="#c0200bff" // not sure what it changes
        />
        </div>
      </div>
    </div>
  );
}

export default ReadMe;