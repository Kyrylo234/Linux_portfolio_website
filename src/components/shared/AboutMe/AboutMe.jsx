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
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", flexDirection: "column" }}>
          <ProfilePic src={Pic} />
          <div style={{alignItems: "center", gap: "16px", display: "flex", flexDirection: "column"}}>
            <h2 style={{ margin: "0 0 4px" }}>👋 Hi, I'm Kyrylo</h2>
            <p style={{ margin: "0 0 8px", color: "#eee", fontSize: "0.9rem", fontWeight: "bold" }}>
              MSc Computer Science @ St Andrews | Founder
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <div style={sectionStyle}>
        <h4 style={{ textAlign: "center", margin: "0 0 6px" }}>🧑‍🔧 About Me</h4>
        <p style={{ margin: "0 0 4px", fontSize: "0.9rem", color: "#eee", lineHeight: "1.6", textAlign: "left" }}>
          Master's student at the University of St Andrews focusing on Artificial Intelligence & Software Product Management, with a strong interest in the intersection of embedded systems and machine learning.
        </p>
      </div>

      {/* Skills */}
      <div style={sectionStyle}>
        <h4 style={{ margin: "0 0 10px" }}>Languages</h4>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <RandomColorDivOnlyText text="English" />
          <RandomColorDivOnlyText text="Ukrainian" />
          <RandomColorDivOnlyText text="Russian" />
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

          <a href="https://instagram.com/powerbander" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF8C00" className="social-icon">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a href="https://www.tiktok.com/@powerbander" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF8C00" className="social-icon">
              <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-4.5h-3.69v14.01c0 1.635-1.33 2.965-2.966 2.965a2.968 2.968 0 0 1-2.966-2.966 2.968 2.968 0 0 1 2.966-2.966c.257 0 .506.033.744.095V8.404a6.63 6.63 0 0 0-.744-.042C5.238 8.362 2 11.6 2 15.614S5.238 22.867 9.251 22.867s7.251-3.239 7.251-7.253V9.548a8.788 8.788 0 0 0 5.132 1.646V7.507a5.11 5.11 0 0 1-2.313-1.945z"/>
            </svg>
          </a>

          <a href="https://www.youtube.com/@Powerbander" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF8C00" className="social-icon">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;