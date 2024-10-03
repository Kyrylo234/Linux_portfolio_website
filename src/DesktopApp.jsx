import './App.css';
import Application from './Application.jsx'
import TopBar from './TopBar.jsx';
import TaskBar from './TaskBar.jsx';
import React, { useRef, useState } from 'react';
import RunningApplication from './RunningApplication.jsx';
function DesktopApp() { 
    const [isVisible, setIsVisible] = useState(true);
    const [appProperties, setAppProperties] = useState({width:500, height:500, left:100, top:100, active:0});
    const applicationRef = useRef();

    const toggleVisibility = () => {
        closeApp();
        if(isVisible){
          applicationRef.current.setInactive();
        }else{
          applicationRef.current.setActive();
        }
    }; 

    const close = () => {
      closeApp();
      applicationRef.current.setInactive();
      setAppProperties({width:500, height:500, left:100, top:100, active:0})
  }; 

  const closeApp = () => {
    setIsVisible(!isVisible);
}; 
  


    return (
      <>
        <div className='App'>
        <TaskBar toggleVisibility={toggleVisibility} ref={applicationRef}/>
        <TopBar/>
        <Application toggleVisibility={toggleVisibility} />
        {isVisible && (
            <RunningApplication toggleVisibility={toggleVisibility} close={close}loading="lazy" appProperties={appProperties} setAppProperties={setAppProperties}/>
        )}
    </div>
      </>
    )
  }
  
  export default DesktopApp