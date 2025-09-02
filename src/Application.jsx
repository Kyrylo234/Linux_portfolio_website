import AppsButton from './AppsButton.jsx';
import Image from './assets/LinkedIn.png';
import Image1 from './assets/GitHub.png';
import CSPPTLogo from './assets/csppt_logo.png'
import Notepad from './assets/notepad.svg'
import DraggableComponent from './DraggableComponent.jsx';
import CV from './assets/Kyrylo_Postupalenko_CV.pdf'
import Linux from './assets/ubuntu.svg'
import cv from './assets/cv.svg';

function Application({toggleVisibility}){
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
        <DraggableComponent className="DraggableOne" source={() => toggleVisibility("projects")} order={3}>
          <AppsButton title='Portfolio' source={Linux}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={() => toggleVisibility("aboutMe")} order={4}>
          <AppsButton title='About Me' source={Notepad}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={() => toggleVisibility("cv")} order={5}>
          <AppsButton title='CV' source={cv}  alternative='CV' loading="lazy"/>
        </DraggableComponent>
      </div>
      </>

  );
}

export default Application;