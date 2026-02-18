import ProfilePic from "../../../ProfilePic"
import Pic from '../../../assets/ProfilePic.PNG'

import LinkedIn from '../../../assets/linkedIn.svg';
import GitHub from '../../../assets/github.svg';

import RandomColorDivOnlyText from "../../../RandomColorDivOnlyText"


function AboutMe() {

  
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
            >Hi I'm Kyrylo. Here you can check out my favourite projects and hobbies.</p>
            </div>
        </div>
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
          <h3 style={{margin: "10px 0" }}>Skills</h3>
          <div style={{ marginTop: "10px",padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h4 style={{margin: "5px 0" }}>Recently Used Tech</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>   
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