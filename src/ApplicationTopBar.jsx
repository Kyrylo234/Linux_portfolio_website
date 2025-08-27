import MinMaxClose from './MinMaxClose.jsx'
function ApplicationTopBar({toggleVisibility, close, setFullScreen, title}) {  
    return (
      <>
        <div className="ApplicationTopBar">
          <h5>{title}</h5>
            <MinMaxClose toggleVisibility={toggleVisibility} close={close} setFullScreen={setFullScreen}/>
        </div>
      </>
    )
  }
  
  export default ApplicationTopBar