import DraggableApplication from "./DraggableApplication";
import ApplicationTopBar from "./ApplicationTopBar";
import React, { useRef, useState } from "react";
import AboutMe from "./AboutMe.jsx";
import Volunteering from "./Volunteering.jsx";
import Education from "./Education.jsx";

function RunningApplication({ id, title, onClose, onToggleVisibility}) {
  const [content, setContent] = useState(<AboutMe />);
  const [activePage, setActivePage] = useState("about");
  const [appProperties, setAppProperties] = useState({
    width: 500,
    height: 500,
    left: 200,
    top: 100,
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
              className={`ApplicationOptionsOption ${activePage === "about" ? "active" : ""}`}
              onClick={() => handleClick("about")}
            >
              <h5>About Me</h5>
            </div>
            <div
              className={`ApplicationOptionsOption ${activePage === "education" ? "active" : ""}`}
              onClick={() => handleClick("education")}
            >
              <h5>Education</h5>
            </div>
            <div
              className={`ApplicationOptionsOption ${activePage === "volunteering" ? "active" : ""}`}
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

export default RunningApplication;