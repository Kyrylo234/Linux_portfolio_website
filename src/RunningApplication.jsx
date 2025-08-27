import DraggableApplication from "./DraggableApplication"
import ApplicationTopBar from "./ApplicationTopBar"
import React, {useRef, useState } from 'react';
import AboutMe from "./AboutMe.jsx";
import Volunteering from './Volunteering.jsx'
import Education from "./Education.jsx";

function RunningApplication({ toggleVisibility, appProperties, setAppProperties, close }) {
  const [content, setContent] = useState(<AboutMe />);
  const appContainerRef = useRef(null); // ref for the container div

  const setFullScreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }else{
      appContainerRef.current?.requestFullscreen?.();
    }
  };

  const educationFunction = (event) => {
    setContent(<Education />);
    setActive(event);
  };

  const aboutMeFunction = (event) => {
    setContent(<AboutMe />);
    setActive(event);
  };

  const volunteeringFunction = (event) => {
    setContent(<Volunteering />);
    setActive(event);
  };

  function setActive(event) {
    const active = document.getElementById("active");
    if (active) active.removeAttribute("id");
    event.currentTarget.setAttribute("id", "active");
  }

  return (
    <div className="RunningApplicationWrapper">
      <DraggableApplication appProperties={appProperties} setAppProperties={setAppProperties} ref={appContainerRef}>
        <ApplicationTopBar toggleVisibility={toggleVisibility} close={close} setFullScreen={setFullScreen} />
        <div className="RunningApplication">
          <div className="applicationOptions">
            <div className="ApplicationOptionsOption" onClick={aboutMeFunction} id="active">
              <h5>About Me</h5>
            </div>
            <div className="ApplicationOptionsOption" onClick={educationFunction}>
              <h5>Education</h5>
            </div>
            <div className="ApplicationOptionsOption" onClick={volunteeringFunction}>
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