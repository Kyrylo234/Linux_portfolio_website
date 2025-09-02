import './App.css';
import Application from './Application.jsx'
import TopBar from './TopBar.jsx';
import TaskBar from './TaskBar.jsx';
import React, { useRef, useState } from 'react';
import RunningApplication from './RunningApplication.jsx';
import RunningApplicationProjects from './RunningApplicationProjects';
import NotePad from './assets/Notepad.svg'
import Linux from './assets/LinuxUbuntuLogo.png'



function DesktopApp() { 
  const applicationRef = useRef(null);

  const [windows, setWindows] = useState([
    { id: "aboutMe", title: "About Me", visible: true, component: RunningApplication, style: { backgroundColor: "rgb(184, 129, 175)" }, image: NotePad, alt:"LinkedIn logo"},
    { id: "projects", title: "Projects", visible: true, component: RunningApplicationProjects, style: { backgroundColor: "rgb(184, 129, 175)" },  image: Linux, alt:"Linux Ubuntu logo" }
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
      <TaskBar windows={windows} toggleVisibility={toggleVisibility}  ref={applicationRef}/>
      <TopBar/>

      <Application toggleVisibility={() => toggleVisibility("aboutMe")} />

      {windows.map(win =>
        win.visible && (
          <win.component
            key={win.id}
            id={win.id}
            title={win.title}
            onClose={() => toggleVisibility(win.id, false)}
            onToggleVisibility={toggleVisibility}
            onFullScreen={(id) => console.log("Fullscreen requested for", id)}
          />
        )
      )}
    </div>
  );
}

export default DesktopApp;