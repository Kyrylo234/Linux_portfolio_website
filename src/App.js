import React, { useState, useEffect, useCallback} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css'
import DesktopApp from './components/desktop/Desktop.jsx';
import Phone from './components/phone/Phone.jsx';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [content, changeContent] = useState(<DesktopApp />);

    const customInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    const options = {
      fullScreen: { enable: true },
      background: { color: "transparent" },
      particles: {
        number: { value: 200 },
        color: { value: "#98119bff" },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: { enable: true, minimumValue: 0.4 } },
        size: { value: 4, random: { enable: true, minimumValue: 2 } },
        move: {
          direction: "bottom",
          enable: true,
          speed: 2,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
    };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      changeContent(<Phone />);
    } else {
      changeContent(<DesktopApp />);
    }
  };

  useEffect(() => {
    // Run once on mount
    handleResize();

    // Attach listener
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // ✅ safe to leave [] because handleResize doesn’t depend on props/state

  return (
    <BrowserRouter>
      <div>
        <Particles options={options} init={customInit} />
        <Routes>
          {/* Route for mobile version (Phone) */}
          <Route path="/*" element={content} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;