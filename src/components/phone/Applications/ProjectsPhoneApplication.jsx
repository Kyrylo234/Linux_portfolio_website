

import LinuxPortfolioWesbiteProject from "../../shared/Projects/LinuxPortfolioWesbiteProject.jsx"
import ThreeJSProject from "../../shared/Projects/ThreeJSProject.jsx"
import ImageToSTL from "../../shared/Projects/ImageToSTLProject.jsx"
import ReadMe from "../../shared/ReadMe.jsx"
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
      <ReadMe title={"👋 Hi, I'm Kyrylo"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234"} desc={"🚀 Passionate about startups and innovation in Edinburgh\n\n💡 Current Projects:\n- ESP32-powered mechanical chime inspired by the Toyota AE-86 “speeding chimer”\n- Controlled via a Flutter app\n- Showcased on a Three.js website for live demo and visualization"}/>
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