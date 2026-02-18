import LinkedIn from './assets/appIcons/linkedIn.svg';
import GitHub from './assets/appIcons/github.svg';
import More from './assets/icons/More.png'
import TaskBarButton from './TaskBarButton.jsx';
function TaskBar({toggleVisibility, windows}){
    return (
        <div className='TaskBar'>   
            <div className='Tasks'>
              <TaskBarButton
                type="link"
                source="https://www.linkedin.com/in/kyryloposty/"
                image={LinkedIn}
                alt="LinkedIn Logo"
                tooltip="LinkedIn"
              />
              <TaskBarButton
                type="link"
                source="https://github.com/Kyrylo234"
                image={GitHub}
                alt="GitHub Logo"
                tooltip="GitHub"
              />
                  {windows.map(win => (
                    <TaskBarButton
                      key={win.id}
                      image={win.image}
                      alt={win.title}
                      toggleVisibility={() => toggleVisibility(win.id)}
                      style={win.style}
                      tooltip={win.title}
                    />
                ))}
            </div>
            <img src={More} alt="More" className='Bottom' loading="lazy"></img>
        </div>
    );
  }
  export default TaskBar;