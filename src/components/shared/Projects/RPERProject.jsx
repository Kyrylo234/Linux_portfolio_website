import Project from "../../../Project"

import Photo1 from "../../../assets/images/RPER/RPER.webp"



function RPERProject() {
    return (
      <Project source={[Photo1]} elements={[<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>
      ,<img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>]} 
      title={"RPER Website"} link={"https://rpparts.uk"} desc={"Commercial website for RPER parts."}/>
    )
  }

export default RPERProject