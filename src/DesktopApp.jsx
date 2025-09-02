import './App.css';
import Application from './Application.jsx'
import TopBar from './TopBar.jsx';
import TaskBar from './TaskBar.jsx';
import React, {useState } from 'react';
import RunningApplication from './RunningApplication.jsx';
import RunningApplicationProjects from './RunningApplicationProjects';
import NotePad from './assets/notepad.svg'
import Linux from './assets/ubuntu.svg'
import CV from './CV.jsx';
import cvImage from './assets/cv.svg'


function DesktopApp() { 
  const [windows, setWindows] = useState([
    { id: "aboutMe", 
      title: "About Me", 
      visible: true, 
      component: RunningApplication, 
      style: { backgroundColor: "rgb(184, 129, 175)" }, 
      image: NotePad, 
      alt:"LinkedIn logo", 
      width: 500,
      height: 500,
      left: 150,
      top: 50, 
      content: "about"},
    { id: "projects", 
      title: "Projects", 
      visible: true, 
      component: RunningApplicationProjects, 
      style: { backgroundColor: "rgb(184, 129, 175)" },
      image: Linux, 
      alt:"Linux Ubuntu logo",
      width: 500,
      height: 500,
      left: 700,
      top: 200, 
      content: "Project1"},
      { id: "cv", 
      title: "CV", 
      visible: true, 
      component: CV, 
      style: { backgroundColor: "rgb(184, 129, 175)" },
      image: cvImage, 
      alt:"CV",
      width: 500,
      height: 500,
      left: 200,
      top: 400, 
      content: "Project1"}
  ]);

  // toggle window visibility
  const toggleVisibility = (id, forceValue = null) => {
    setWindows(prev => {
      const index = prev.findIndex(win => win.id === id);
      if (index === -1) return prev; // nothing to update

      const target = prev[index];
      const newVisible = forceValue !== null ? forceValue : !target.visible;

      // clone the array
      const updated = [...prev];

      // update only the changed window
      updated[index] = {
        ...target,
        visible: newVisible,
        style: {
          backgroundColor: newVisible
            ? "rgb(184, 129, 175)" // active color
            : "rgba(0, 0, 0, 0)"   // inactive color
        }
      };

      return updated;
    });
  };

  return (
    <div className='App'>
      <TaskBar windows={windows} toggleVisibility={toggleVisibility}/>
      <TopBar/>
      <Application toggleVisibility={() => toggleVisibility("aboutMe")} />
      {windows.map((win) =>
        win.visible && (
          <win.component
            key={win.id}
            appWindow={win}
            setWindows={setWindows}
            onClose={() => toggleVisibility(win.id, false)}
            onToggleVisibility={() => toggleVisibility(win.id)}
          />
        )
      )}
    </div>
  );
}

export default DesktopApp;