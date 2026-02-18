import AppsButtonPhone from './AppsButtonPhone.jsx';
import LinkedIn from './assets/appIcons/linkedIn.svg';
import GitHub from './assets/appIcons/github.svg';
import cv from './assets/appIcons/cv.svg';
import Notepad from './assets/appIcons/notepad.svg'
function PhoneApps({setApp1Visible,setProjectsVisible,setCvVisible}) {  
    return (
      <>
        <div className='ApplicationsPhone'>
          <AppsButtonPhone title='LinkedIn' source={LinkedIn} alternative='LinkedIn logo' loading="lazy" link="https://www.linkedin.com/in/kyryloposty/"/>
          <AppsButtonPhone title='GitHub' source={GitHub}  alternative='GitHub logo' loading="lazy" link="https://github.com/Kyrylo234"/>
          <AppsButtonPhone title='About Me' source={Notepad}  alternative='GitHub logo' loading="lazy" link={setApp1Visible}/>
          <AppsButtonPhone title='CV' source={cv}  alternative='GitHub logo' loading="lazy" link={setCvVisible}/>
          <AppsButtonPhone title='Projects' source={Notepad}  alternative='GitHub logo' loading="lazy" link={setProjectsVisible}/>
      </div>
      </>
    )
  }
  
  export default PhoneApps