import AppsButton from './AppsButton.jsx';
import LinkedIn from './assets/linkedIn.svg';
import GitHub from './assets/github.svg';
import Notepad from './assets/notepad.svg'
import DraggableComponent from './DraggableComponent.jsx';
import Linux from './assets/ubuntu.svg'
import cv from './assets/cv.svg';

function Application({toggleVisibility}){
  return (
      <>
      <div className='Applications'>
        <DraggableComponent className="DraggableOne" source={"https://www.linkedin.com/in/kyryloposty/"} order={0}>
          <AppsButton title='LinkedIn' source={LinkedIn} alternative='LinkedIn logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={"https://github.com/Kyrylo234"} order={1}>
          <AppsButton title='GitHub' source={GitHub}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={() => toggleVisibility("projects")} order={2}>
          <AppsButton title='Projects' source={Linux}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={() => toggleVisibility("aboutMe")} order={3}>
          <AppsButton title='About Me' source={Notepad}  alternative='GitHub logo' loading="lazy"/>
        </DraggableComponent>
        <DraggableComponent className="DraggableOne" source={() => toggleVisibility("cv")} order={4}>
          <AppsButton title='CV' source={cv}  alternative='CV' loading="lazy"/>
        </DraggableComponent>
      </div>
      </>

  );
}

export default Application;