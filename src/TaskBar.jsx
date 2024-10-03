import Image from './assets/LinkedIn.png';
import Image1 from './assets/GitHub.png';
import CSPPTLogo from './assets/csppt_logo.png'
import LancasterLogo from './assets/Lancaster.png';
import NotePad from './assets/Notepad.svg'
import More from './assets/More.png'
import TaskBarButton from './TaskBarButton.jsx';
import { forwardRef, useState } from 'react';
import React, { useImperativeHandle, useRef } from 'react';
import TaskBarButtonActive from './TaskBarButtonActive.jsx';
const TaskBar = forwardRef(({toggleVisibility}, ref) => {
        const [buttonColour, setColour] = useState({backgroundColor: "rgba(255, 99, 71, 1)"})
        useImperativeHandle(ref,() => ({
          setActive(){
            setColour({backgroundColor: "rgba(255, 99, 71, 1)"})
            console.log(buttonColour)
          },
          setInactive(){
            setColour({backgroundColor: "rgba(0,0,0,0)"})
            console.log(buttonColour)
          }
        }));
    return (
        <div className='TaskBar'>   
            <div className='Tasks'>
                <TaskBarButton source="https://www.linkedin.com/in/kyryloposty/" image={Image} alt="LinkedIn Logo"/>
                <TaskBarButton source="https://github.com/Kyrylo234" image={Image1} alt="GitHub Logo"/>
                <TaskBarButton source="https://github.com/Kyrylo234/CSPPT" image={CSPPTLogo} alt="CSPPT Logo"/>
                <TaskBarButtonActive source="https://github.com/Kyrylo234/CSPPT" image={NotePad} alt="NotePad" toggleVisibility={toggleVisibility} buttonColour={buttonColour}/>
                <div className='Task'><img src={LancasterLogo} alt="lancaster Univeresity Logo" loading="lazy"></img></div>
            </div>
            <img src={More} alt="More" className='Bottom' loading="lazy"></img>
        </div>
    );
  });
  
  export default TaskBar;