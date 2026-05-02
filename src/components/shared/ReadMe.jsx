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
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "12px",
  };

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
        <a href={link} style={{ color: "inherit", textDecoration: "underline" }}>
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
        {/* Header */}
        <div style={sectionStyle}>
          <h3 style={{ margin: "0 0 4px" }}>👋 Hi, I'm Kyrylo</h3>
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
          <h5 style={{ textAlign: "center", margin: "0 0 6px" }}>🧑‍🔧 About Me</h5>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left" }}>
            🚀 Passionate about startups in the UK — currently launching my first product
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left"  }}>
            📬 50+ email subscribers and growing · building in public
          </p>
          <p style={{ margin: "0", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left"  }}>
            📸 85k+ views in the last 30 days on Instagram alone
          </p>
        </div>

        {/* Current Projects */}
        <div style={sectionStyle}>
          <h5 style={{ textAlign: "left", margin: "0 0 6px", textAlign: "center" }}>💡 Current Projects</h5>
          <ul style={{ margin: "0 0 6px", paddingLeft: "1.2rem", lineHeight: "2", fontSize: "0.9rem", color: "#eee", textAlign: "left"  }}>
            <li>
              🔔 <strong>Touge Chime</strong> — ESP32-powered mechanical chime inspired by the Toyota AE86 "speeding chime" ·{" "}
              <a href="https://powerbander.tech/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Launching Soon</a>
            </li>
            <li>
              📱 <strong>Bluetooth Companion App</strong> — Flutter app to control the Touge Chime ·{" "}
              <a href="https://apps.apple.com/app/powerbander/id6762231997" target="_blank" rel="noopener noreferrer" style={linkStyle}>App Store</a> ✅
            </li>
            <li>
              🏎️ <strong>3D Store</strong> — Interactive Three.js shop with Stripe checkout ·{" "}
              <a href="https://powerbander.tech/" target="_blank" rel="noopener noreferrer" style={linkStyle}>powerbander.tech</a> ✅
            </li>
          </ul>
          <p style={{ margin: "0", fontSize: "0.9rem", color: "#eee", textAlign: "left"  }}>
            📈 Building Touge Chime in public
          </p>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "10px 0 12px" }}>
          <a href="https://instagram.com/power.bander" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Instagram-@power.bander-E4405F?logo=instagram&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Instagram" />
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
          <h5 style={{ textAlign: "left", margin: "0 0 6px", textAlign: "center" }}>🧠 Favourite Languages & Tools</h5>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "0 0 12px" }}>
            <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }} alt="JavaScript" />
            <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Node.js" />
            <img src="https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Three.js" />
            <img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c" style={{ height: "20px", margin: "0px", width: "auto" }} alt="C" />
            <img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="ESP32" />
            <img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Python" />
            <img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Java" />
            <img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Flutter" />
            <img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }} alt="Dart" />
          </p>

          {/* GitHub Calendar */}
          <div
            ref={calendarWrapperRef}
            style={{
              width: "95%",
              margin: "0 auto",
              transition: "all 0.3s ease",
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
    </div>
  );
}

export default ReadMe;