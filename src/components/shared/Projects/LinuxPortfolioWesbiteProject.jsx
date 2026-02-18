import Project from "../../../Project"

import Desktop from "../../../assets/images/PortfolioWebsite/Desktop.png"
import Phone from "../../../assets/images/PortfolioWebsite/Phone.jpeg"
import PhoneAboutMe from "../../../assets/images/PortfolioWebsite/PhoneAboutMe.jpeg"
import PhoneProjects from "../../../assets/images/PortfolioWebsite/PhoneProjects.jpeg"



function LinuxPortfolioWesbiteProject() {
    return (
      <Project source={[Desktop, Phone, PhoneAboutMe, PhoneProjects]} elements={[<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-SQLite-003B57?style=flat&logo=sqlite&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" style={{ height: "20px", margin: "0px", width: "auto" }}/>]} 
      elementsNames={["Dart", "Flutter", "Drift"]} title={"Linux Portfolio Website"} desc={"Portfolio website inspired by Ubuntu Linux or an iOS device (based on your device), featuring a Falling Blocks game with persistent high scores. Built with React.js, Node.js, and SQLite3."}/>
    )
  }

export default LinuxPortfolioWesbiteProject