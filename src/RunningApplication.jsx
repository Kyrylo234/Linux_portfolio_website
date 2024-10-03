import DraggableApplication from "./DraggableApplication"
import ApplicationTopBar from "./ApplicationTopBar"
import React, {useState } from 'react';
import AboutMe from "./AboutMe.jsx";
import Volunteering from './Volunteering.jsx'
import Education from "./Education.jsx";
function RunningApplication({toggleVisibility, appProperties, setAppProperties}) {  
    const [content,changeContent] = useState(<AboutMe/>);

    const educationFunction = event => {
      changeContent(<Education/>)
      setActive(event);
    }

    const aboutMeFunction = event => {
      changeContent(<AboutMe/>)
      setActive(event);
    }

    const volunteeringFunction = event => {
      changeContent(<Volunteering/>)
      setActive(event);
    }

    function setActive(event){
      const active = document.getElementById('active');
      active.removeAttribute('id');
      let element = event.currentTarget;
      element.setAttribute('id', 'active');
    }

    function stopPropagation(event){
      document.body.style.cursor = 'auto';
      event.stopPropagation();
    }

    return (
      <>
        <DraggableApplication appProperties={appProperties} setAppProperties={setAppProperties}>
        <ApplicationTopBar toggleVisibility={toggleVisibility}/>
        <div className="RunningApplication" onMouseDown={stopPropagation} onMouseMove={stopPropagation}>
            <div className='applicationOptions'>
              <div className="ApplicationOptionsOption" onClick={aboutMeFunction} id="active">
                <h5>About Me</h5>
              </div>
              <div className="ApplicationOptionsOption" onClick={educationFunction}><h5>Education</h5></div>
              <div className="ApplicationOptionsOption" onClick={volunteeringFunction}><h5>Volunteering</h5></div>
              
              </div>
            <div className="Contents">
              {content}
            </div>
            
        </div>
        </DraggableApplication>
      </>
    )
  }
  
  export default RunningApplication