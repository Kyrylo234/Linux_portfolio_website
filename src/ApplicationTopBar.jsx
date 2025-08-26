import MinMaxClose from './MinMaxClose.jsx'
function ApplicationTopBar({toggleVisibility, close, setFullScreen}) {  
    return (
      <>
        <div className="ApplicationTopBar">
          <h5>About Me</h5>
            <MinMaxClose toggleVisibility={toggleVisibility} close={close} setFullScreen={setFullScreen}/>
        </div>
      </>
    )
  }
  
  export default ApplicationTopBar