import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import PhoneApps from "./PhoneApps";
import TopBar from "./TopBar";
import HomeButton from "./HomeButton";
import PhoneApplication from "./PhoneApplication";
import ProjectsApplication from "./ProjectsApplication";
import CVApplication from "./CVApplication";

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
        <Route path="/aboutme" element={<PhoneApplication />} />
        <Route path="/projects" element={<ProjectsApplication />} />
        <Route path="/cv" element={<CVApplication />} />
      </Routes>

      <TopBar />
      <HomeButton setApp1Visible={goHome} />
    </div>
  );
}

export default Phone;