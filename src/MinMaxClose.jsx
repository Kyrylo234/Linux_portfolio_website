import Maximise from './assets/Maximise.png'
import Minimise from './assets/minimise.png'
import Close from './assets/Close.png'
function MinMaxClose({toggleVisibility, close, setFullScreen}) {

    return (
      <>
        <div className="MinMaxClose">
            <button className="MinMaxCloseButton" onClick={toggleVisibility} title="Minimise" accessibilitylabel="Minimise"><img src={Minimise} alt="Minimise"/></button>
            <button className="MinMaxCloseButton" onClick={setFullScreen} title="Maximise" accessibilitylabel="Maximise"><img src={Maximise}alt="Maximise"/></button>
            <button className="MinMaxCloseButton" onClick={close} title="close" accessibilitylabel="Close"><img src={Close} alt="Close"/></button>
        </div>
      </>
    )
  }
  
  export default MinMaxClose