import Maximise from './assets/Maximise.png'
import Minimise from './assets/minimise.png'
import Close from './assets/Close.png'
function MinMaxClose({toggleVisibility}) {

  const handleClickMax = () => {
    console.log("Max")
};
    return (
      <>
        <div className="MinMaxClose">
            <button onClick={toggleVisibility} title="Minimise" accessibilitylabel="Minimise"><img src={Minimise}></img></button>
            <button onClick={handleClickMax} title="Maximise" accessibilitylabel="Maximise"><img src={Maximise}></img></button>
            <button onClick={toggleVisibility} title="close" accessibilitylabel="Close"><img src={Close}></img></button>
        </div>
      </>
    )
  }
  
  export default MinMaxClose