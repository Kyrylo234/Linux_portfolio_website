import Application from '../../Application.jsx'
import TopBar from '../../TopBar.jsx';
import TaskBar from '../../TaskBar.jsx';
import React, {useState } from 'react';
import AboutMeDesktopApplication from './Applications/AboutMeDesktopApplication.jsx';
import ProjectsDesktopApplication from './Applications/ProjectsDesktopApplication.jsx';
import NotePad from '../../assets/appIcons/notepad.svg'
import Linux from '../../assets/appIcons/ubuntu.svg'
import CVDesktopApplication from './Applications/CVDesktopApplication.jsx';
import cvImage from '../../assets/appIcons/cv.svg'
import RunningTetrisApplication from './Applications/FallingBlocksDesktopApplication.jsx';
import Game from '../../assets/appIcons/game.svg'

function Desktop() { 
  const [windows, setWindows] = useState([
    { id: "aboutMe", 
      title: "About Me", 
      visible: true, 
      component: AboutMeDesktopApplication, 
      style: { backgroundColor: "rgb(184, 129, 175)" }, 
      image: NotePad, 
      alt:"LinkedIn logo", 
      width: 500,
      height: 500,
      left: 150,
      top: 50, 
      content: "about",
      order: 1},
    { id: "projects", 
      title: "Projects", 
      visible: true, 
      component: ProjectsDesktopApplication, 
      style: { backgroundColor: "rgb(184, 129, 175)" },
      image: Linux, 
      alt:"Linux Ubuntu logo",
      width: 500,
      height: 500,
      left: 700,
      top: 200, 
      content: "Project1",
      order: 2},
    { id: "cv", 
      title: "CV", 
      visible: true, 
      component: CVDesktopApplication, 
      style: { backgroundColor: "rgb(184, 129, 175)" },
      image: cvImage, 
      alt:"CV",
      width: 500,
      height: 500,
      left: 200,
      top: 400,
      order: 3},
    { id: "fallingBlocks", 
      title: "Falling Code", 
      visible: true, 
      component: RunningTetrisApplication, 
      style: { backgroundColor: "rgb(184, 129, 175)" },
      image: Game, 
      alt:"Falling Blocks Code Game",
      width: 500,
      height: 500,
      left: 200,
      top: 400,
      order: 3}
  ]);

  const bringToFront = (id) => {
    setWindows((prev) => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const targetIndex = sorted.findIndex((w) => w.id === id);
      const target = sorted.splice(targetIndex, 1)[0];
      sorted.push(target);
      return sorted.map((win, index) => ({ ...win, order: index + 1 }));
    });
  };

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
      <Application toggleVisibility={toggleVisibility} />
      {windows.map((win) =>
        win.visible && (
          <win.component
            key={win.id}
            appWindow={win}
            setWindows={setWindows}
            onClose={() => toggleVisibility(win.id, false)}
            onToggleVisibility={() => toggleVisibility(win.id)}
            onFocus={() => bringToFront(win.id)}
          />
        )
      )}
    </div>
  );
}

export default Desktop;