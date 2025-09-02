import RandomColorDiv from './RandomColorDiv';
import ProfilePic from "./ProfilePic"
import Pic from './assets/ProfilePic.PNG'
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
        <h5>Hey I'm Kyrylo. Here you can check out the projects I'm working on and my hobbies.</h5>
        </div>
        </div>
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <h3 style={{margin: "10px 0" }}>Skills</h3>
        <div style={{ marginTop: "10px",padding: "5px",border: "1px solid #ddd", borderRadius: "8px" }}>
        <h4 style={{margin: "5px 0" }}>Programming</h4>
        <RandomColorDiv text="Java"/>
        <RandomColorDiv text="JavaScript"/>
        <RandomColorDiv text="Python"/>
        <RandomColorDiv text="C"/>
        <RandomColorDiv text="Dart"/>
        <RandomColorDiv text="SQL"/>
        <RandomColorDiv text="HTML/CSS"/>
        </div>
        <div style={{ marginTop: "10px",padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h4 style={{margin: "5px 0" }}>Tech</h4>
        <RandomColorDiv text="React.js"/>
        <RandomColorDiv text="Swing(Java)"/>
        <RandomColorDiv text="Flutter(Dart)"/>
        <RandomColorDiv text="Git"/>
        <RandomColorDiv text="Drift"/>
        </div>
        <div style={{ marginTop: "10px",padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h4 style={{margin: "5px 0" }}>Languages</h4>
        <RandomColorDiv text="English"/>
        <RandomColorDiv text="Ukrainian"/>
        <RandomColorDiv text="Russian"/>
        </div>
        </div>
        <div style={{ marginTop: "10px",padding: "5px",border: "2px solid #dddddd8e", borderRadius: "8px" }}>
        <h4 style={{margin: "5px 0" }}>Hobbies</h4>
        <RandomColorDiv text="Volleyball"/>
        <RandomColorDiv text="Fitness"/>
        <RandomColorDiv text="Video Production"/>
        <RandomColorDiv text="Travelling"/>
        <RandomColorDiv text="Cars"/>
        </div>
        
        <div style={{ 
          marginTop: "10px",
          padding: "5px",
          border: "2px solid #dddddd8e",
          borderRadius: "8px",
          textAlign: "center"  // center-aligns text like <h3>
        }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", fontWeight: "600" }}>Contact Me</h3>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", // center horizontally
        alignItems: "center", 
        gap: "8px", 
        marginBottom: "16px" 
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
        }}>Copy</button>
  </div>

  <a href="/assets/Kyrylo_Postupalenko_CV.pdf" download="cv" style={{ textDecoration: "none" }}>
    <button
      style={{
        padding: "8px 14px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#444",
        color: "white",
        cursor: "pointer"
    }}>Download my CV</button>
  </a>
</div>
      </div>
    );
  }
export default AboutMe;