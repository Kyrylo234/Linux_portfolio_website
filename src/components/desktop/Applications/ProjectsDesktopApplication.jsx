import DraggableApplication from "../../../DraggableApplication";
import ApplicationTopBar from "../../../ApplicationTopBar";
import React, { useRef} from "react";




import ReadMeProject from "../../shared/Projects/ReadMeProject.jsx"
import ThreeJSProject from "../../shared/Projects/ThreeJSProject.jsx";
import LinuxPortfolioWesbiteProject from "../../shared/Projects/LinuxPortfolioWesbiteProject.jsx";
import ImageToSTL from "../../shared/Projects/ImageToSTLProject.jsx";
import CSPPTProject from "../../shared/Projects/CSPPTProject.jsx";

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
            return <ImageToSTL/>;
        case "Project5":
            return <CSPPTProject/>;
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
                <h5>Linux Portfolio Website</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project4" ? "active" : ""}`}
                onClick={() => handleClick("Project4")}
                >
                <h5>Image To STL Converter</h5>
                </div>
                <div
                className={`ApplicationOptionsOption ${appWindow.content === "Project5" ? "active" : ""}`}
                onClick={() => handleClick("Project5")}
                >
                <h5>CSPPT</h5>
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