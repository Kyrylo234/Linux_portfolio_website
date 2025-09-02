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
    setWindows(prev =>
      prev.map(win => {
        if (win.id === id) {
          const newVisible = forceValue !== null ? forceValue : !win.visible;
          return {
            ...win,
            visible: newVisible,
            style: {
              backgroundColor: newVisible
                ? "rgb(184, 129, 175)" // active color
                : "rgb(0, 0, 0, 0)" // inactive color
            }
          };
        }
        return win;
      })
    );
  };

  // close window
  const close = (id) => {
    setWindows(prev =>
      prev.map(win =>
        win.id === id ? { ...win, visible: false } : win
      )
    );
    applicationRef.current?.setInactive?.();
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
            onClose={close}
            onToggleVisibility={toggleVisibility}
            onFullScreen={(id) => console.log("Fullscreen requested for", id)}
          />
        )
      )}
    </div>
  );
}

export default DesktopApp;