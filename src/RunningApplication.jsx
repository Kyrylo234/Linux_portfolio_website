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
  const [content, setContent] = useState(<AboutMe />);
  const [activePage, setActivePage] = useState("about");

  const appContainerRef = useRef(null);

  // forward fullscreen requests to parent
  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      appContainerRef.current?.requestFullscreen?.();
    }
  };

  const handleClick = (page) => {
    setActivePage(page);
    if (page === "about") setContent(<AboutMe />);
    if (page === "education") setContent(<Education />);
    if (page === "volunteering") setContent(<Volunteering />);
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
                activePage === "about" ? "active" : ""
              }`}
              onClick={() => handleClick("about")}
            >
              <h5>About Me</h5>
            </div>
            <div
              className={`ApplicationOptionsOption ${
                activePage === "education" ? "active" : ""
              }`}
              onClick={() => handleClick("education")}
            >
              <h5>Education</h5>
            </div>
            <div
              className={`ApplicationOptionsOption ${
                activePage === "volunteering" ? "active" : ""
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
            {content}
          </div>
        </div>
      </DraggableApplication>
    </div>
  );
}
export default RunningApplication;