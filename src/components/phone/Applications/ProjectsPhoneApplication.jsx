import Project from "../../../Project"
import Website from"../../../assets/website1.png"
import Website2 from"../../../assets/website2.png"
import Website3 from"../../../assets/website3.png"
import Website4 from"../../../assets/website4.png"
import CSPPT from "../../../assets/CSPPT.png"
import Database from "../../../assets/Database.jpeg"
import SQLSVG from "../../../SQLSVG"
import JSSVG from "../../../JSSVG"
import ReactSVG from "../../../ReactSVG"
import HTMLSVG from "../../../HTMLSVG"
import CSSSVG from "../../../CSSSVG"
import GitSVG from "../../../GitSVG"
import JavaSVG from "../../../JavaSVG"
import PHPSVG from "../../../PHPSVG"

import LinuxPortfolioWesbiteProject from "../../shared/Projects/LinuxPortfolioWesbiteProject.jsx"

function ProjectsPhoneApplication() {  
      return (
        <div className="PhoneApplication" style={{paddingTop:"20px", paddingBottom:"60px"}}>
          <h2>Projects</h2>
          <LinuxPortfolioWesbiteProject />
          <Project source={[Website, Website2, Website3, Website4]} elements={[<ReactSVG/>, <JSSVG/>, <HTMLSVG/>, <CSSSVG/>, <GitSVG/>]} elementsNames={["React.js", "JavaScript", "HTML", "CSS", "Git"]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"} desc={"Portfolio website inspired by Ubuntu Linux or an iOS device (based on your device), featuring a Falling Blocks game with persistent high scores. Built with React.js, Node.js, and SQLite3."}/>
          <Project source={[CSPPT]} elements={[<JavaSVG/>, <GitSVG/>]} elementsNames={["Java", "Git"]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"} desc={"As a university group project, we built a PowerPoint-style app for computer scientists using Java and the Swing library."}/>
          <Project source={[Database]} elements={[<PHPSVG/>, <HTMLSVG/>, <CSSSVG/>, <SQLSVG/>]} elementsNames={["PHP", "HTML", "CSS", "SQL"]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"} desc={"Using PHP and MySQL a website was created to store the books a person has read."}/>
        </div>
      )
    }
    
    export default ProjectsPhoneApplication