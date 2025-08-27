import Project from "./Project"
import Website from"./assets/Website.png"
import CSPPT from "./assets/CSPPT.png"
import Database from "./assets/Database.jpeg"
import carApp1 from "./assets/carApp1.png"
import carApp2 from "./assets/carApp2.png"
import carApp3 from "./assets/carApp3.png"
import carApp4 from "./assets/carApp4.png"
function ProjectsApplication() {  
      
      return (
        <>  
            <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"60px"}}>
              <h2>Projects</h2>
              <Project source={[Website]} elements={["JavaScript", "React.js", "CSS", "Git"]} title={"Portfolio Website"} imgAlt={"Website"}/>
              <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={["Dart", "Flutter (Dart)"]} title={"Car Service Tracking App"}/>
              <Project source={[CSPPT]} elements={["Java", "Swing (Java)", "Teamwork", "Git"]} title={"CSPPT"}/>
              <Project source={[Database]} elements={["PHP", "HTML/CSS", "SQL"]} title={"Database Of Books Read"}/>
            </div>
        </>
      )
    }
    
    export default ProjectsApplication