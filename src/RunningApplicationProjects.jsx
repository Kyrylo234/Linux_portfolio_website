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
import ReadMe from "./ReadMe";

function RunningApplicationProjects({ appWindow, setWindows, onClose, onToggleVisibility, onFocus}) {
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
        return <ReadMe title={"👋 Hi, I'm Kyrylo"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"} desc={"🎓 Computer Science Graduate from Lancaster University\n🚀 Passionate about software development, mobile apps, and IoT systems\n💡 Currently building an ESP32-powered speed chime controlled by a Flutter app"}/>;
      case "Project2":
        return <Project source={[Website, Website2, Website3, Website4]} elements={[<JSSVG/>, <ReactSVG/>, <HTMLSVG/>, <CSSSVG/>,  <GitSVG/>]} elementsNames={["React.js", "JavaScript", "HTML", "CSS", "Git"]} title={"Portfolio Website"} imgAlt={"Website demo"} link={"https://github.com/Kyrylo234/Linux_portfolio_website"} desc={"Portfolio website styled like either the Ubuntu Linux desktop or an iOS device, featuring a Falling Blocks game with persistent high scores. Built with React.js, Node.js, and SQLite3."}/>;
        case "Project3":
        return <Project source={[carApp1, carApp2, carApp3, carApp4]} elements={[<DartSVG/>, <FlutterSVG/>, <DriftSVG/>]} elementsNames={["Dart", "Flutter", "Drift"]} title={"Car Service Tracking App"} desc={"A Flutter app to track vehicle maintenance and part replacements — using the Drift database."}/>;
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

export default RunningApplicationProjects;