import React, { useState, useEffect } from 'react';
import './App.css';
import DesktopApp from './DesktopApp.jsx';
import Phone from './Phone.jsx';
function App() {
  const [content,changeContent] = useState(<DesktopApp/>);

  const handleResize = () => {
    if(window.innerWidth < 768){
      if(content!==<Phone/>){
        changeContent(<Phone/>)
      }
    }else{
      if(content!==<DesktopApp/>){
        changeContent(<DesktopApp/>)
      }
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
    {content}
    </div>
  );
}

export default App;
