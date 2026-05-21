import Clock from "./Clock.jsx";
import Power from "./assets/icons/power.webp"
import Volume from './assets/icons/Volume.webp'
import Network from './assets/icons/network.webp'
function TopBar() {
    return (
        <div className='TopBar'>
          <div className="Activities">
            <h5>Activities</h5>
          </div>
          <div className="Activities1">
            <Clock/>
          </div>
          <div className="TopBarButtons">
            <img src={Network} alt="Network" className="TopBarButton" loading="lazy"></img>
            <img src={Volume}  alt="Volume" className="TopBarButton" loading="lazy"></img>
            <img src={Power}  alt="Power" className="TopBarButton" loading="lazy"></img>
          </div>
        </div>
    );
  }
  
  export default TopBar;