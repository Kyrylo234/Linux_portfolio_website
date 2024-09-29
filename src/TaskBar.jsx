import Image from './assets/LinkedIn.png';
import Image1 from './assets/GitHub.png';
import CSPPTLogo from './assets/csppt_logo.png'
import LancasterLogo from './assets/Lancaster.png';
import NotePad from './assets/Notepad.svg'
import More from './assets/More.png'
import TaskBarButton from './TaskBarButton.jsx';
function TaskBar({toggleVisibility}) {
    return (
        <div className='TaskBar'>   
            <div className='Tasks'>
                <TaskBarButton source="https://www.linkedin.com/in/kyryloposty/" image={Image} alt="LinkedIn Logo"/>
                <TaskBarButton source="https://github.com/Kyrylo234" image={Image1} alt="GitHub Logo"/>
                <TaskBarButton source="https://github.com/Kyrylo234/CSPPT" image={CSPPTLogo} alt="CSPPT Logo"/>
                <div className='Task' onClick={toggleVisibility}><img src={NotePad} alt="NotePad" loading="lazy"></img></div>
                <div className='Task'><img src={LancasterLogo} alt="lancaster Univeresity Logo" loading="lazy"></img></div>
            </div>
            <img src={More} alt="More" className='Bottom' loading="lazy"></img>
        </div>
    );
  }
  
  export default TaskBar;