import DraggableApplication from "./DraggableApplication"
import ApplicationTopBar from "./ApplicationTopBar"
import React, {createRef, useRef, useState } from 'react';
import AboutMe from "./AboutMe.jsx";
import Volunteering from './Volunteering.jsx'
import Education from "./Education.jsx";
function RunningApplication({toggleVisibility, appProperties, setAppProperties, close}) {  
    const [content,changeContent] = useState(<AboutMe/>);
    const elementRef = React.createRef();

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

    const setFullScreen = event =>{
      elementRef.style.width = '100%';
    }

    return (
      <>
        <DraggableApplication appProperties={appProperties} setAppProperties={setAppProperties} ref={elementRef}>
        <ApplicationTopBar toggleVisibility={toggleVisibility} close={close} setFullScreen={setFullScreen}/>
        <div className="RunningApplication">
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