import DraggableApplication from "./DraggableApplication";
import ApplicationTopBar from "./ApplicationTopBar";
import React, { useRef, useState } from "react";
import AboutMe from "./AboutMe.jsx";
import Volunteering from "./Volunteering.jsx";
import Education from "./Education.jsx";
import ProjectsApplication from './ProjectsApplication.jsx'
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

function RunningApplicationProjects({ id, title, onClose, onToggleVisibility, onFullScreen }) {
    const [content, setContent] = useState(<Project source={[Website, Website2, Website3, Website4]} elements={["JavaScript", "React.js", "CSS", "Git"]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"}/>);
    const [activePage, setActivePage] = useState("Project1");
    const [appProperties, setAppProperties] = useState({
        width: 500,
        height: 500,
        left: 500,
        top: 300,
        active: 0
    });

    const appContainerRef = useRef(null);
  
    // forward fullscreen requests to parent
    const handleFullScreen = () => {
        if (document.fullscreenElement) {
        document.exitFullscreen();
        } else {
        appContainerRef.current?.requestFullscreen?.();
        }
        onFullScreen?.(id);
    };

  const handleClick = (page) => {
    setActivePage(page);
    if (page === "Project1") setContent(<Project source={[Website, Website2, Website3, Website4]} elements={["JavaScript", "React.js", "CSS", "Git"]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"}/>);
    if (page === "Project2") setContent(<Project source={[carApp1, carApp2, carApp3, carApp4]} elements={["Dart", "Flutter (Dart)"]} title={"Car Service Tracking App"}/>);
    if (page === "Project3") setContent(<Project source={[CSPPT]} elements={["Java", "Swing (Java)", "Teamwork", "Git"]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"}/>);
    if (page === "Project4") setContent(<Project source={[Database]} elements={["PHP", "HTML/CSS", "SQL"]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"}/>);
};
  return (
    <div className="RunningApplicationWrapper">
            <DraggableApplication
                appProperties={appProperties}
                setAppProperties={setAppProperties}
                ref={appContainerRef}
            >
            <ApplicationTopBar
                toggleVisibility={() => onToggleVisibility?.(id)}
                close={() => onClose?.(id)}
                setFullScreen={handleFullScreen}
                title={title}
            />
            <div className="RunningApplication">
            <div className="applicationOptions">
                <div
                className={`ApplicationOptionsOption ${activePage === "Project1" ? "active" : ""}`}
                onClick={() => handleClick("Project1")}
                >
                <h5>Portfolio Website</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${activePage === "Project2" ? "active" : ""}`}
                onClick={() => handleClick("Project2")}
                >
                <h5>Car Service Tracking</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${activePage === "Project3" ? "active" : ""}`}
                onClick={() => handleClick("Project3")}
                >
                <h5>CSPPT</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${activePage === "Project4" ? "active" : ""}`}
                onClick={() => handleClick("Project4")}
                >
                <h5>Books Read Tracker</h5>
                </div>
            </div>
            <div
                className="Contents"
                style={{
                overflow: "scroll",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
                }}
            >
                {content}
            </div>
            </div>
        </DraggableApplication>
    </div>
  );
}

export default RunningApplicationProjects;