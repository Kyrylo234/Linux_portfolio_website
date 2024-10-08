import React from 'react';
import AppsButtonPhone from './AppsButtonPhone.jsx';
import Image from './assets/LinkedIn.png';
import Image1 from './assets/GitHub.png';
import CSPPTLogo from './assets/csppt_logo.png'
import LancasterLogo from './assets/Lancaster.png';
import Notepad from './assets/Notepad.svg'
import DraggableComponentPhone from './DraggableComponentPhone.jsx';
function PhoneApps({setApp1Visible,setProjectsVisible}) {  
    return (
      <>
        <div className='ApplicationsPhone'>
        <AppsButtonPhone title='LinkedIn' source={Image} alternative='LinkedIn logo' loading="lazy" link="https://www.linkedin.com/in/kyryloposty/"/>
        <AppsButtonPhone title='GitHub' source={Image1}  alternative='GitHub logo' loading="lazy" link="https://github.com/Kyrylo234"/>
        <AppsButtonPhone title='CSPPT' source={CSPPTLogo}  alternative='GitHub logo' loading="lazy" link={"https://github.com/Kyrylo234/CSPPT"}/>
        <AppsButtonPhone title='About Me' source={Notepad}  alternative='GitHub logo' loading="lazy" link={setApp1Visible}/>
        <AppsButtonPhone title='CV' source={LancasterLogo}  alternative='GitHub logo' loading="lazy"/>
        <AppsButtonPhone title='Projects' source={Notepad}  alternative='GitHub logo' loading="lazy" link={setProjectsVisible}/>
      </div>
      </>
    )
  }
  
  export default PhoneApps