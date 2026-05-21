import ProfilePic from "../../../ProfilePic"
import Pic from '../../../assets/ProfilePic.webp'
import LinkedIn from '../../../assets/appIcons/linkedIn.svg';
import GitHub from '../../../assets/appIcons/github.svg';
import RandomColorDivOnlyText from "../../../RandomColorDivOnlyText"

function AboutMe() {
  function copyFunction() {
    navigator.clipboard.writeText("kyrylop2004@gmail.com");
  }

  const sectionStyle = {
    marginTop: "10px",
    padding: "12px",
    border: "2px solid #dddddd8e",
    borderRadius: "8px",
  };

  const cardStyle = {
    marginTop: "10px",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const linkStyle = {
    color: "#4fc3f7",
    textDecoration: "none",
    fontWeight: "500",
  };

  const tagStyle = {
    display: "inline-block",
    padding: "3px 8px",
    borderRadius: "4px",
    backgroundColor: "#2a2a2a",
    border: "1px solid #444",
    fontSize: "0.8rem",
    color: "#ccc",
  };

  return (
    <div className="fiftyPix">

      {/* Header */}
      <div style={sectionStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <ProfilePic src={Pic} />
          <div>
            <h2 style={{ margin: "0 0 4px" }}>👋 Hi, I'm Kyrylo</h2>
            <p style={{ margin: "0 0 8px", color: "#aaa", fontSize: "0.9rem" }}>
              Incoming MSc Computer Science @ St Andrews · Maker of Touge Chime · Startup Enthusiast
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
              <a href="https://kyrylo.uk/" target="_blank" rel="noopener noreferrer" style={linkStyle}>🌐 Portfolio</a>
              <a href="https://www.linkedin.com/in/kyryloposty/" target="_blank" rel="noopener noreferrer" style={linkStyle}>💼 LinkedIn</a>
              <a href="https://www.kaggle.com/kyrylo234" target="_blank" rel="noopener noreferrer" style={linkStyle}>🤖 Kaggle</a>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div style={sectionStyle}>
        <h5 style={{ textAlign: "center", margin: "0 0 6px" }}>🧑‍🔧 About Me</h5>
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
        <h3 style={{ margin: "0 0 10px" }}>💡 Current Projects</h3>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "2", fontSize: "0.9rem", color: "#eee" }}>
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
      </div>

      {/* Skills */}
      <div style={sectionStyle}>
        <h4 style={{ margin: "0 0 10px" }}>Languages</h4>
        <div style={{ ...cardStyle, marginTop: "10px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <RandomColorDivOnlyText text="English" />
            <RandomColorDivOnlyText text="Ukrainian" />
            <RandomColorDivOnlyText text="Russian" />
          </div>
        </div>
        <h4 style={{ margin: "0 0 8px" }}>Hobbies</h4>
        <div style={{ ...cardStyle, marginTop: "10px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <RandomColorDivOnlyText text="Volleyball" />
            <RandomColorDivOnlyText text="Fitness" />
            <RandomColorDivOnlyText text="Video Production" />
            <RandomColorDivOnlyText text="Travelling" />
            <RandomColorDivOnlyText text="Cars" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div style={sectionStyle}>
        <h3 style={{ margin: "0 0 16px", fontSize: "22px", fontWeight: "600" }}>Contact Me</h3>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <h5 style={{ margin: 0, fontSize: "16px" }}>Kyrylop2004@gmail.com</h5>
          <button
            onMouseDown={copyFunction}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#008080",
              color: "white",
              cursor: "pointer",
            }}
          >
            Copy
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", marginBottom: "16px" }}>
          <a href="https://www.linkedin.com/in/kyryloposty/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <img src={LinkedIn} alt="LinkedIn" loading="lazy" className="social-icon" />
          </a>
          <a href="https://github.com/Kyrylo234" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            <img src={GitHub} alt="GitHub" loading="lazy" className="social-icon" />
          </a>
        </div>
        <a href="/assets/Kyrylo_Postupalenko_CV.pdf" download="cv" style={{ textDecoration: "none" }}>
          <button style={{ padding: "10px 16px", borderRadius: "6px", border: "none", backgroundColor: "#444", color: "white", cursor: "pointer" }}>
            Download my CV
          </button>
        </a>
      </div>

    </div>
  );
}

export default AboutMe;