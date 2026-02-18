import RandomColorDiv from '../../../RandomColorDiv.jsx';
import ProfilePic from "../../../ProfilePic"
import Pic from '../../../assets/ProfilePic.PNG'
import RandomColorDivOnlyText from '../../../RandomColorDivOnlyText';
import SQLSVG from "../../../SQLSVG"
import JSSVG from "../../../JSSVG"
import ReactSVG from "../../../ReactSVG"
import HTMLSVG from "../../../HTMLSVG"
import CSSSVG from "../../../CSSSVG"
import GitSVG from "../../../GitSVG"
import JavaSVG from "../../../JavaSVG"
import PHPSVG from "../../../PHPSVG"
import DartSVG from "../../../DartSVG"
import DriftSVG from "../../../DriftSVG"
import FlutterSVG from "../../../FlutterSVG"
import PythonSVG from "../../../PythonSVG"
import CLogo from '../../../CLogo.jsx'
import LinkedIn from '../../../assets/linkedIn.svg';
import GitHub from '../../../assets/github.svg';


function AboutMe() {
  const programming = [
    { name: "Java", icon: <JavaSVG /> },
    { name: "JavaScript", icon: <JSSVG /> },
    { name: "Python", icon: <PythonSVG /> },
    { name: "Dart", icon: <DartSVG /> },
    { name: "C", icon: <CLogo /> },
    { name: "HTML", icon: <HTMLSVG /> },
    { name: "CSS", icon: <CSSSVG /> },
    { name: "SQL", icon: <SQLSVG /> },
    { name: "PHP", icon: <PHPSVG /> },
  ];

  const tech = [
    { name: "React.js", icon: <ReactSVG /> },
    { name: "Git", icon: <GitSVG /> },
    { name: "Drift", icon: <DriftSVG /> },
    { name: "Flutter", icon: <FlutterSVG />}
  ];
  
  function copyFunction(event){
    navigator.clipboard.writeText("kyrylop2004@gmail.com");
  }
  

    return (
      <div className="fiftyPix">
        <h2>About Me</h2>
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
          <h3>Personal Profile</h3>
          <ProfilePic src={Pic}/>
          <div style={{ marginTop: "10px",padding: "5px",border: "1px solid #ddd", borderRadius: "8px" }}>
            <p
              style={{
                margin: "8px 0 12px 0",
                fontSize: "0.9rem",
                lineHeight: "1.5",
                color: "#eee", // closer to white
                fontWeight: "300",
              }}
            >Hi I'm Kyrylo. Here are my favourite projects and hobbies.</p>
            </div>
        </div>
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
          <h3 style={{margin: "10px 0" }}>Skills</h3>
          <div style={{ marginTop: "10px",padding: "16px",border: "1px solid #ddd", borderRadius: "8px" }}>
            <h4 style={{margin: "5px 0" }}>Programming</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {programming.map((svg, i) => (
                  <div><RandomColorDiv key={i} text={svg.icon} />
                  <p style={{
                    margin: "8px 0 12px 0",
                    fontSize: "0.75rem",
                    lineHeight: "1.5",
                    color: "#eee",
                    fontWeight: "300",
                  }}>{svg.name}</p></div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px",padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h4 style={{margin: "5px 0" }}>Tech</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {tech.map((svg, i) => (
                  <div><RandomColorDiv key={i} text={svg.icon} />
                  <p style={{
                    margin: "8px 0 12px 0",
                    fontSize: "0.75rem",
                    lineHeight: "1.5",
                    color: "#eee",
                    fontWeight: "300",
                  }}>{svg.name}</p></div>
                ))}
                </div>
              </div>
          </div>
          <div style={{ marginTop: "10px",padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h4 style={{margin: "5px 0" }}>Languages</h4>
            <RandomColorDivOnlyText text="English"/>
            <RandomColorDivOnlyText text="Ukrainian"/>
            <RandomColorDivOnlyText text="Russian"/>
          </div>
        </div>
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
          <h4 style={{margin: "5px 0" }}>Hobbies</h4>
          <RandomColorDivOnlyText text="Volleyball"/>
          <RandomColorDivOnlyText text="Fitness"/>
          <RandomColorDivOnlyText text="Video Production"/>
          <RandomColorDivOnlyText text="Travelling"/>
          <RandomColorDivOnlyText text="Cars"/>
        </div>
        
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
  <h3 style={{ margin: "0 0 20px", fontSize: "22px", fontWeight: "600" }}>
    Contact Me
  </h3>

  <div style={{ 
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    gap: "10px", 
    marginBottom: "20px" 
  }}>
    <h5 style={{ margin: 0, fontSize: "16px" }}>Kyrylop2004@gmail.com</h5>
    <button 
      onMouseDown={copyFunction}
      style={{
        padding: "6px 12px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#008080",
        color: "white",
        cursor: "pointer"
      }}
    >
      Copy
    </button>
  </div>

  <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  marginBottom: "20px"
}}>
  <a
    href="https://www.linkedin.com/in/kyryloposty/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="social-link"
  >
    <img src={LinkedIn} alt="LinkedIn" loading="lazy" className="social-icon" />
  </a>

  <a
    href="https://github.com/Kyrylo234"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="social-link"
  >
    <img src={GitHub} alt="GitHub" loading="lazy" className="social-icon" />
  </a>
</div>

  {/* CV button */}
  <a 
    href="/assets/Kyrylo_Postupalenko_CV.pdf" 
    download="cv" 
    style={{ textDecoration: "none" }}
  >
    <button
      style={{
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#444",
        color: "white",
        cursor: "pointer"
      }}
    >
      Download my CV
    </button>
  </a>
</div>
      </div>
    );
  }
export default AboutMe;