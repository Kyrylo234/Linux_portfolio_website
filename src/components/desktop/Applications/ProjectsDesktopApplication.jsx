import DraggableApplication from "../../../DraggableApplication";
import ApplicationTopBar from "../../../ApplicationTopBar";
import React, { useRef} from "react";
import Project from "../../../Project"
import CSPPT from "../../../assets/CSPPT.png"
import Database from "../../../assets/Database.jpeg"
import carApp1 from "../../../assets/carApp1.png"
import carApp2 from "../../../assets/carApp2.png"
import carApp3 from "../../../assets/carApp3.png"
import carApp4 from "../../../assets/carApp4.png"

import SQLSVG from "../../../SQLSVG"
import HTMLSVG from "../../../HTMLSVG"
import CSSSVG from "../../../CSSSVG"
import GitSVG from "../../../GitSVG"
import JavaSVG from "../../../JavaSVG"
import PHPSVG from "../../../PHPSVG"
import DartSVG from "../../../DartSVG"
import DriftSVG from "../../../DriftSVG"
import FlutterSVG from "../../../FlutterSVG"


import ReadMeProject from "../../shared/Projects/ReadMeProject.jsx"
import ThreeJSProject from "../../shared/Projects/ThreeJSProject.jsx";
import LinuxPortfolioWesbiteProject from "../../shared/Projects/LinuxPortfolioWesbiteProject.jsx";

function ProjectsDesktopApplication({ appWindow, setWindows, onClose, onToggleVisibility, onFocus}) {
    const appContainerRef = useRef(null);
  
    // forward fullscreen requests to parent
    const handleFullScreen = () => {
        if (document.fullscreenElement) {
        document.exitFullscreen();
        } else {
        appContainerRef.current?.requestFullscreen?.();
        }
    };

    const getContent = () => {
    switch (appWindow.content) {
      case "Project1":
        return <ReadMeProject/>;
      case "Project2":
          return <ThreeJSProject/>;
        case "Project3":
          return <LinuxPortfolioWesbiteProject/>;
      case "Project4":
        return <Project source={[CSPPT]} elements={[<JavaSVG/>,  <GitSVG/>]} elementsNames={["Java", "Git"]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"} desc={"A presentation tool for computer scientists with live coding, UML diagrams, and an inbuilt terminal, created in Java Swing."}/>;
      case "Project5":
        return <Project source={[Database]} elements={[<PHPSVG/>, <HTMLSVG/>, <CSSSVG/>, <SQLSVG/>]} elementsNames={["PHP", "HTML", "CSS", "SQL"]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"} desc={"A web app that stores and displays books a person has read, built with PHP and MySQL."}/>
      default:
        return null;
    }
  };

    const handleClick = (page) => {
        setWindows((prev) =>
            prev.map((w) =>
                w.id === appWindow.id
                ? { ...w, content: page }
                : w
            )
        );
    };



  return (
    <div className="RunningApplicationWrapper" style={{ zIndex: appWindow.order, ...appWindow.style }} onMouseDown={onFocus}>
            <DraggableApplication
                window={appWindow}
                setWindows={setWindows}
                ref={appContainerRef}
            >
            <ApplicationTopBar
                toggleVisibility={() => onToggleVisibility?.(appWindow.id)}
                close={() => onClose?.(appWindow.id)}
                setFullScreen={handleFullScreen}
                title={appWindow.title}
            />
            <div className="RunningApplication">
            <div className="applicationOptions">
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project1" ? "active" : ""}`}
                onClick={() => handleClick("Project1")}
                >
                <h5>Read Me</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project2" ? "active" : ""}`}
                onClick={() => handleClick("Project2")}
                >
                <h5>Portfolio Website</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project3" ? "active" : ""}`}
                onClick={() => handleClick("Project3")}
                >
                <h5>Car Service Tracking</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project4" ? "active" : ""}`}
                onClick={() => handleClick("Project4")}
                >
                <h5>CSPPT</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project5" ? "active" : ""}`}
                onClick={() => handleClick("Project5")}
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
                {getContent()}
            </div>
            </div>
        </DraggableApplication>
    </div>
  );
}

export default ProjectsDesktopApplication;