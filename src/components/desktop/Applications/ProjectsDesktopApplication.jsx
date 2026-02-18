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
        return <Project source={[CSPPT]} elements={[<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>]} elementsNames={["Java", "Git"]} title={"CSPPT"} link={"https://github.com/Kyrylo234/CSPPT"} desc={"A presentation tool for computer scientists with live coding, UML diagrams, and an inbuilt terminal, created in Java Swing."}/>;
      case "Project5":
        return <Project source={[Database]} elements={[<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Three.js-000000?style=flat&logo=three.js&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-ESP32-008000?style=flat&logo=espressif&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Flutter-02569B?style=flat&logo=flutter&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-Dart-0175C2?style=flat&logo=dart&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>
          ,<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white"style={{ height: "20px", margin: "0px", width: "auto" }}/>]} elementsNames={["PHP", "HTML", "CSS", "SQL"]} title={"Database Of Books Read"} link={"https://github.com/Kyrylo234/Database-project"} desc={"A web app that stores and displays books a person has read, built with PHP and MySQL."}/>
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
                <h5>3D Touge Chimer Shop</h5>
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