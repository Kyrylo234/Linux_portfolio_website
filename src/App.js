import React, { useState, useEffect } from 'react';
import './App.css';
import DesktopApp from './DesktopApp.jsx';
import Phone from './Phone.jsx';

function App() {
  const [content, changeContent] = useState(<DesktopApp />);

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

  return <div>{content}</div>;
}

export default App;