import React from 'react';
import AppsButton from './AppsButton.jsx';
import Image from './assets/LinkedIn.png';
import Image1 from './assets/GitHub.png';
import CSPPTLogo from './assets/csppt_logo.png'
import LancasterLogo from './assets/Lancaster.png';
import Notepad from './assets/Notepad.svg'
import DraggableComponent from './DraggableComponent.jsx';
import CV from './assets/Kyrylo_Postupalenko_CV.pdf'

function Application({toggleVisibility}) {

  return (
      <>
      <div className='Applications'>
        <DraggableComponent className="DraggableOne" source={"https://www.linkedin.com/in/kyryloposty/"} order={0}>
          <AppsButton title='LinkedIn' source={Image} alternative='LinkedIn logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={"https://github.com/Kyrylo234"} order={1}>
          <AppsButton title='GitHub' source={Image1}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={"https://github.com/Kyrylo234/CSPPT"} order={2}>
          <AppsButton title='CSPPT' source={CSPPTLogo}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={toggleVisibility} order={3}>
          <AppsButton title='About Me' source={Notepad}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" order={4}>
          <a href={CV} download="Kyrylo_Postupalenko_CV">
            <AppsButton title='CV' source={LancasterLogo}  alternative='GitHub logo' loading="lazy"/>
          </a>
        </DraggableComponent>
      </div>
      </>

  );
}

export default Application;