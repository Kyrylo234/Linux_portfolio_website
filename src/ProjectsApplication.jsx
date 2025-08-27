import Project from "./Project"
import Website from"./assets/website1.png"
import Website2 from"./assets/website2.png"
import Website3 from"./assets/website3.png"
import Website4 from"./assets/website4.png"
import CSPPT from "./assets/CSPPT.png"
import Database from "./assets/Database.jpeg"
import carApp1 from "./assets/carApp1.png"
import carApp2 from "./assets/carApp2.png"
import carApp3 from "./assets/carApp3.png"
import carApp4 from "./assets/carApp4.png"
function ProjectsApplication() {  
      return (
        <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"60px"}}>
          <h2>Projects</h2>
          <Project source={[Website, Website2, Website3, Website4]} elements={["JavaScript", "React.js", "CSS", "Git"]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"}/>
          <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={["Dart", "Flutter (Dart)"]} title={"Car Service Tracking App"}/>
          <Project source={[CSPPT]} elements={["Java", "Swing (Java)", "Teamwork", "Git"]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"}/>
          <Project source={[Database]} elements={["PHP", "HTML/CSS", "SQL"]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"}/>
        </div>
      )
    }
    
    export default ProjectsApplication