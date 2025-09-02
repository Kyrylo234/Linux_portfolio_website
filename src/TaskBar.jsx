import Image from './assets/LinkedIn.png';
import Image1 from './assets/GitHub.png';
import CSPPTLogo from './assets/csppt_logo.png'
import LancasterLogo from './assets/Lancaster.png';
import More from './assets/More.png'
import TaskBarButton from './TaskBarButton.jsx';
import TaskBarButtonActive from './TaskBarButtonActive.jsx';
function TaskBar({toggleVisibility, windows}){
    return (
        <div className='TaskBar'>   
            <div className='Tasks'>
                <TaskBarButton source="https://www.linkedin.com/in/kyryloposty/" image={Image} alt="LinkedIn Logo"/>
                <TaskBarButton source="https://github.com/Kyrylo234" image={Image1} alt="GitHub Logo"/>
                <TaskBarButton source="https://github.com/Kyrylo234/CSPPT" image={CSPPTLogo} alt="CSPPT Logo"/>
                  {windows.map(win => (
                    <TaskBarButtonActive
                      key={win.id}
                      image={win.image}
                      alt={win.title}
                      toggleVisibility={() => toggleVisibility(win.id)}
                      style={win.style}
                    />
                ))}
            </div>
            <img src={More} alt="More" className='Bottom' loading="lazy"></img>
        </div>
    );
  }
  export default TaskBar;