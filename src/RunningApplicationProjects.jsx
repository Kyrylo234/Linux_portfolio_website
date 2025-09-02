import DraggableApplication from "./DraggableApplication";
import ApplicationTopBar from "./ApplicationTopBar";
import React, { useRef} from "react";
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

function RunningApplicationProjects({ appWindow, setWindows, onClose, onToggleVisibility}) {
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
        return <Project source={[Website, Website2, Website3, Website4]} elements={[<JSSVG/>, <ReactSVG/>, <HTMLSVG/>, <CSSSVG/>,  <GitSVG/>]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"}/>;
      case "Project2":
        return <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} title={"Car Service Tracking App"}/>;
      case "Project3":
        return <Project source={[CSPPT]} elements={[<JavaSVG/>,  <GitSVG/>]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"}/>;
      case "Project4":
        return <Project source={[Database]} elements={[<PHPSVG/>, <HTMLSVG/>, <CSSSVG/>, <SQLSVG/>]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"}/>
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
    <div className="RunningApplicationWrapper">
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
                <h5>Portfolio Website</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project2" ? "active" : ""}`}
                onClick={() => handleClick("Project2")}
                >
                <h5>Car Service Tracking</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project3" ? "active" : ""}`}
                onClick={() => handleClick("Project3")}
                >
                <h5>CSPPT</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project4" ? "active" : ""}`}
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
                {getContent()}
            </div>
            </div>
        </DraggableApplication>
    </div>
  );
}

export default RunningApplicationProjects;