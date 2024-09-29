import './App.css';
import DesktopApp from './DesktopApp.jsx';
import Phone from './Phone.jsx';
function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <>
    {isMobile ? <Phone/> : <DesktopApp/>}
    </>
  );
}

export default App;
