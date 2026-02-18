import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import PhoneApps from "../../PhoneApps";
import TopBar from "../../TopBar";
import HomeButton from "../../HomeButton";
import AboutMePhoneApplication from "./Applications/AboutMePhoneApplication";
import ProjectsPhoneApplication from "./Applications/ProjectsPhoneApplication";
import CVPhoneApplication from "./Applications/CVPhoneApplication";

function Phone() {
  const navigate = useNavigate();

  // Navigation handlers
  const goHome = () => navigate("/");
  const goToAboutMe = () => navigate("/aboutme");
  const goToProjects = () => navigate("/projects");
  const goToCV = () => navigate("/cv");

  return (
    <div className="PhoneContainer">
      <Routes>
        <Route
          path="/"
          element={
            <PhoneApps
              setApp1Visible={goToAboutMe}
              setProjectsVisible={goToProjects}
              setCvVisible={goToCV}
            />
          }
        />
        <Route path="/aboutme" element={<AboutMePhoneApplication />} />
        <Route path="/projects" element={<ProjectsPhoneApplication />} />
        <Route path="/cv" element={<CVPhoneApplication />} />
      </Routes>

      <TopBar />
      <HomeButton setApp1Visible={goHome} />
    </div>
  );
}

export default Phone;