import MinMaxClose from './MinMaxClose.jsx'
function ApplicationTopBar({toggleVisibility}) {  
    return (
      <>
        <div className="ApplicationTopBar">
          <h5>About Me</h5>
            <MinMaxClose toggleVisibility={toggleVisibility}/>
        </div>
      </>
    )
  }
  
  export default ApplicationTopBar