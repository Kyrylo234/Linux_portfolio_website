import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function ReadMe({ title, link, desc }) {
  const containerRef = useRef(null);
  const calendarWrapperRef = useRef(null);
  const [blockSize, setBlockSize] = useState(14);
  const blockMargin = 2;
  const minBlockSize = 6;

  useEffect(() => {
    if (!calendarWrapperRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = entry.contentRect.width;
      const weeks = 53;
      const calculatedSize = Math.max(
        Math.floor((width - weeks * blockMargin) / weeks),
        minBlockSize
      );
      setBlockSize(calculatedSize);
    });
    resizeObserver.observe(calendarWrapperRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const linkStyle = {
    color: "#4fc3f7",
    textDecoration: "none",
    fontWeight: "500",
  };

  const sectionStyle = {
    padding: "10px",
    marginBottom: "12px",
    overflow: "hidden",
    boxSizing: "border-box",
  };

  return (
    <div
      ref={containerRef}
      style={{
        margin: "10px",
        padding: "5px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "4px", marginTop: "0" }}>
        <a href={link} style={{ color: "inherit", textDecoration: "underline" }}>
          {title}
        </a>
      </h2>
        {/* Header */}
        <div style={sectionStyle}>
          <p style={{ margin: "0 0 8px", color: "#aaa", fontSize: "0.9rem" }}>
            Incoming MSc Computer Science @ St Andrews · Maker of Touge Chime · Startup Enthusiast
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://kyrylo.uk/" target="_blank" rel="noopener noreferrer" style={linkStyle}>🌐 Portfolio</a>
            <span style={{ color: "#555" }}>|</span>
            <a href="https://www.linkedin.com/in/kyryloposty/" target="_blank" rel="noopener noreferrer" style={linkStyle}>💼 LinkedIn</a>
            <span style={{ color: "#555" }}>|</span>
            <a href="https://www.kaggle.com/kyrylo234" target="_blank" rel="noopener noreferrer" style={linkStyle}>🤖 Kaggle</a>
          </div>
        </div>

        {/* About Me */}
        <div style={sectionStyle}>
          <h3 style={{ textAlign: "center", margin: "0 0 6px" }}>🧑‍🔧 About Me</h3>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left" }}>
            🚀 Building PowerBander - a JDM-inspired hardware brand
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left" }}>
            🔔 Currently launching Touge Chime
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left"  }}>
            📬 100+ email subscribers for batch 1
          </p>
          <p style={{ margin: "0", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left"  }}>
            📸 450+ followers on Instagram with 150k+ organic views
          </p>
        </div>

        {/* Current Projects */}
        <div style={sectionStyle}>
          <h3 style={{ textAlign: "left", margin: "0 0 6px", textAlign: "center" }}>💡 Current Projects</h3>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left" }}>
          🔔 <strong>Touge Chime</strong> — ESP32-powered mechanical speed chime, inspired by the Toyota AE86 ·{" "}
          <a href="https://powerbander.tech/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Launching Soon</a> <br/>
          📱 <strong>Bluetooth Companion App</strong> — Flutter app to control the Touge Chime ·{" "}
            <a href="https://apps.apple.com/app/powerbander/id6762231997" target="_blank" rel="noopener noreferrer" style={linkStyle}>App Store</a> ✅ <br/>
          🏎️ <strong>3D Store</strong> — Interactive Three.js shop with Stripe checkout ·{" "}
            <a href="https://powerbander.tech/" target="_blank" rel="noopener noreferrer" style={linkStyle}>powerbander.tech</a> ✅
        </p>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "10px 0 12px" }}>
          <a href="https://instagram.com/powerbander" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Instagram-@powerbander-E4405F?logo=instagram&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@powerbander" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/TikTok-@powerbander-000000?logo=tiktok&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="TikTok" />
          </a>
          <a href="https://www.youtube.com/@Powerbander" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/YouTube-@Powerbander-FF0000?logo=youtube&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="YouTube" />
          </a>
        </p>
        </div>

        {/* Languages & Tools */}
        <div style={sectionStyle}>
          {/* GitHub Calendar */}
          <div
            ref={calendarWrapperRef}
            style={{
              width: "100%",
              transition: "all 0.3s ease",
              overflow: "hidden",
              boxSizing: "border-box"
            }}
          >
            <GitHubCalendar
              username="Kyrylo234"
              blockSize={blockSize}
              blockMargin={blockMargin}
              fontSize={Math.max(blockSize * 1.1, 10)}
              color="#c0200bff"
            />
          </div>
        </div>
    </div>
  );
}

export default ReadMe;