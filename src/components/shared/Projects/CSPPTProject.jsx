import Project from "../../../Project"

import Photo1 from "../../../assets/images/CSPPT/CSPPT.png"
import Photo2 from "../../../assets/images/CSPPT/image2.png"
import Photo3 from "../../../assets/images/CSPPT/image3.png"
import Photo4 from "../../../assets/images/CSPPT/image4.png"
import Photo5 from "../../../assets/images/CSPPT/image5.png"




function CSPPTProject() {
    return (
      <Project source={[Photo1, Photo2, Photo3, Photo4, Photo5]} elements={[<img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]} 
      title={"Computer Science PowerPoint"} link={"https://github.com/Kyrylo234/CSPPT"} desc={"A presentation tool for computer science students and developers, designed to go beyond traditional slides by integrating UML diagrams, a built-in command line, and live coding support — all inside your slides."}/>
    )
  }

export default CSPPTProject