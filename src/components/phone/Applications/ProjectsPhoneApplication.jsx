

import LinuxPortfolioWesbiteProject from "../../shared/Projects/LinuxPortfolioWesbiteProject.jsx"
import ThreeJSProject from "../../shared/Projects/ThreeJSProject.jsx"
import ImageToSTL from "../../shared/Projects/ImageToSTLProject.jsx"
import CSPPTProject from "../../shared/Projects/CSPPTProject.jsx"
import PowerbanderApp from "../../shared/Projects/PowerbanderApp.jsx"
import TougeChime from "../../shared/Projects/TougeChime.jsx";


function ProjectsPhoneApplication() {
  return (
    <div
      className="PhoneApplication"
      style={{
        paddingTop: "20px",
        paddingBottom: "60px",
        overflowY: "auto",
        overflowX: "hidden",
        height: "100%",
        boxSizing: "border-box"
      }}
    >
      <h2>Projects</h2>
      <TougeChime/>
      <ThreeJSProject />
      <PowerbanderApp/>
      <LinuxPortfolioWesbiteProject/>
      <ImageToSTL />
      <CSPPTProject/>
    </div>
  )
}
    
export default ProjectsPhoneApplication