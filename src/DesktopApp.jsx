import './App.css';
import Application from './Application.jsx'
import TopBar from './TopBar.jsx';
import TaskBar from './TaskBar.jsx';
import React, { useRef, useState } from 'react';
import RunningApplication from './RunningApplication.jsx';
import RunningApplicationProjects from './RunningApplicationProjects';

function DesktopApp() { 
  const applicationRef = useRef(null);

  const [windows, setWindows] = useState([
    { id: "aboutMe", title: "About Me", visible: true, component: RunningApplication, props: {} },
    { id: "projects", title: "Projects", visible: true, component: RunningApplicationProjects, props: {} }
  ]);

  // toggle window visibility
  const toggleVisibility = (id, forceValue = null) => {
    setWindows(prev =>
      prev.map(win =>
        win.id === id
          ? { ...win, visible: forceValue !== null ? forceValue : !win.visible }
          : win
      )
    );
    const targetWin = windows.find(w => w.id === id);
    if (targetWin?.visible) {
      applicationRef.current?.setInactive?.();
    } else {
      applicationRef.current?.setActive?.();
    }
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
      <TaskBar windows={windows} toggleVisibility={() => toggleVisibility("aboutMe")}  ref={applicationRef}/>
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