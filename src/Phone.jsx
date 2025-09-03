import PhoneApps from "./PhoneApps"
import TopBar from "./TopBar"
import HomeButton from "./HomeButton"
import React, { useState } from 'react';
import PhoneApplication from "./PhoneApplication"
import ProjectsApplication from "./ProjectsApplication"
import CVApplication from "./CVApplication";
function Phone() {  
  const [desktopVisible, setDesktopVisible] = useState(true);
  const [app1Visible, setApp1Visible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);

  const toggleDesktopVisibility = () => {
    setApp1Visible(true);
    setDesktopVisible(false);
  }; 

  const returnHome = () => {
    setApp1Visible(false);
    setProjectsVisible(false);
    setCvVisible(false);
    setDesktopVisible(true);
  }; 

  const toggleProjectsVisible = () => {
    setProjectsVisible(true);
    setDesktopVisible(false);
  }; 

  const toggleCvVisible = () => {
    setCvVisible(true);
    setDesktopVisible(false);
  }; 

    return (
    <div className="PhoneContainer">
      {desktopVisible && (
            <PhoneApps loading="lazy" setApp1Visible={toggleDesktopVisibility} setProjectsVisible={toggleProjectsVisible} setCvVisible={toggleCvVisible}/>
        )}
        {app1Visible && (
            <PhoneApplication loading="lazy"/>
        )}
        {projectsVisible && (
            <ProjectsApplication loading="lazy"/>
        )}
        {cvVisible && (
            <CVApplication loading="lazy"/>
        )}
        <TopBar/>
        <HomeButton setApp1Visible={returnHome}/>
    </div>
  );
  }
  
  export default Phone