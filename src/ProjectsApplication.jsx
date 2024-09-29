import Project from "./Project"
import Website from"./assets/Website.png"
import CSPPT from "./assets/CSPPT.png"
import Database from "./assets/Database.jpeg"
function ProjectsApplication() {  
      
      return (
        <>  
            <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"20px"}}>
              <h4>Projetcs</h4>
              <Project source={Website} elements={["JavaScript", "React", "CSS"]}/>
              <Project source={CSPPT} elements={["Java", "Teamwork"]}/>
              <Project source={Database} elements={["PHP", "SQL"]}/>
            </div>
        </>
      )
    }
    
    export default ProjectsApplication