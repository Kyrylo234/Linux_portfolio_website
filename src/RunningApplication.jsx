import DraggableApplication from "./DraggableApplication";
import ApplicationTopBar from "./ApplicationTopBar";
import React, {
  useRef,
  useState
} from "react";
import AboutMe from "./AboutMe.jsx";
import Volunteering from "./Volunteering.jsx";
import Education from "./Education.jsx";

function RunningApplication({ appWindow, setWindows, onClose, onToggleVisibility }) {
  const appContainerRef = useRef(null);

  const getContent = () => {
    switch (appWindow.content) {
      case "about":
        return <AboutMe />;
      case "education":
        return <Education />;
      case "volunteering":
        return <Volunteering />;
      default:
        return null;
    }
  };

  // forward fullscreen requests to parent
  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      appContainerRef.current?.requestFullscreen?.();
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
              className={`ApplicationOptionsOption ${
                appWindow.content === "about" ? "active" : ""
              }`}
              onClick={() => handleClick("about")}
            >
              <h5>About Me</h5>
            </div>
            <div
              className={`ApplicationOptionsOption ${
                appWindow.content === "education" ? "active" : ""
              }`}
              onClick={() => handleClick("education")}
            >
              <h5>Education</h5>
            </div>
            <div
              className={`ApplicationOptionsOption ${
                appWindow.content === "volunteering" ? "active" : ""
              }`}
              onClick={() => handleClick("volunteering")}
            >
              <h5>Volunteering</h5>
            </div>
          </div>
          <div
            className="Contents"
            style={{
              overflow: "scroll",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none" // IE/Edge
            }}
          >
            {getContent()}
          </div>
        </div>
      </DraggableApplication>
    </div>
  );
}
export default RunningApplication;