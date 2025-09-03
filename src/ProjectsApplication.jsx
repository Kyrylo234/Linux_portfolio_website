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
import SQLSVG from "./SQLSVG"
import JSSVG from "./JSSVG"
import ReactSVG from "./ReactSVG"
import HTMLSVG from "./HTMLSVG"
import CSSSVG from "./CSSSVG"
import GitSVG from "./GitSVG"
import JavaSVG from "./JavaSVG"
import PHPSVG from "./PHPSVG"
import DartSVG from "./DartSVG"
import DriftSVG from "./DriftSVG"
import FlutterSVG from "./FlutterSVG"

function ProjectsApplication() {  
      return (
        <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"60px"}}>
          <h2>Projects</h2>
          <Project source={[Website, Website2, Website3, Website4]} elements={[<ReactSVG/>, <JSSVG/>, <HTMLSVG/>, <CSSSVG/>, <GitSVG/>]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"} desc={"This portfolio site was my hands-on project for learning JavaScript and React, styled after the Ubuntu desktop I used at Lancaster University."}/>
          <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} title={"Car Service Tracking App"} desc={"I built this app to track car maintenance, completed services, and fuel efficiency. It’s built with Flutter (Dart) and uses Drift for a lightweight local database."}/>
          <Project source={[CSPPT]} elements={[<JavaSVG/>, <GitSVG/>]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"} desc={"As a university group project, we built a PowerPoint-style app for computer scientists using Java and the Swing library."}/>
          <Project source={[Database]} elements={[<PHPSVG/>, <HTMLSVG/>, <CSSSVG/>, <SQLSVG/>]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"} desc={"Using PHP and MySQL a website was created to store the books a person has read."}/>
        </div>
      )
    }
    
    export default ProjectsApplication