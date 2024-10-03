import MinMaxClose from './MinMaxClose.jsx'
function ApplicationTopBar({toggleVisibility, close}) {  
    return (
      <>
        <div className="ApplicationTopBar">
          <h5>About Me</h5>
            <MinMaxClose toggleVisibility={toggleVisibility} close={close}/>
        </div>
      </>
    )
  }
  
  export default ApplicationTopBar