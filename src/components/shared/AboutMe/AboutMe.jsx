import ProfilePic from "../../../ProfilePic"
import Pic from '../../../assets/ProfilePic.PNG'
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
        <h3 style={{ margin: "0 0 10px" }}>🧑‍🔧 About Me</h3>
        <div style={cardStyle}>
          <p style={{ margin: "0 0 6px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6" }}>
            🚀 Passionate about startups in the UK — currently launching my first product
          </p>
          <p style={{ margin: "0 0 6px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6" }}>
            📬 50+ email subscribers and growing · building in public
          </p>
          <p style={{ margin: "0", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6" }}>
            📸 85k+ views in the last 30 days on Instagram alone
          </p>
        </div>
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
        <h3 style={{ margin: "0 0 10px" }}>🧠 Favourite Languages & Tools</h3>
        <div style={cardStyle}>
          <h4 style={{ margin: "0 0 8px" }}>Recently Used Tech</h4>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: 0 }}>
            <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", width: "auto" }} alt="JavaScript" />
            <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" style={{ height: "20px", width: "auto" }} alt="Node.js" />
            <img src="https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white" style={{ height: "20px", width: "auto" }} alt="Three.js" />
            <img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c" style={{ height: "20px", width: "auto" }} alt="C" />
            <img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white" style={{ height: "20px", width: "auto" }} alt="ESP32" />
            <img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white" style={{ height: "20px", width: "auto" }} alt="Python" />
            <img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white" style={{ height: "20px", width: "auto" }} alt="Java" />
            <img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black" style={{ height: "20px", width: "auto" }} alt="React" />
            <img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white" style={{ height: "20px", width: "auto" }} alt="Flutter" />
            <img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white" style={{ height: "20px", width: "auto" }} alt="Dart" />
            <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" style={{ height: "20px", width: "auto" }} alt="HTML5" />
            <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" style={{ height: "20px", width: "auto" }} alt="CSS3" />
          </p>
        </div>
        <div style={{ ...cardStyle, marginTop: "10px" }}>
          <h4 style={{ margin: "0 0 8px" }}>Languages</h4>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <RandomColorDivOnlyText text="English" />
            <RandomColorDivOnlyText text="Ukrainian" />
            <RandomColorDivOnlyText text="Russian" />
          </div>
        </div>
        <div style={{ ...cardStyle, marginTop: "10px" }}>
          <h4 style={{ margin: "0 0 8px" }}>Hobbies</h4>
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