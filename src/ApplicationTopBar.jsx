import MinMaxClose from './MinMaxClose.jsx'
function ApplicationTopBar({toggleVisibility}) {  
  const handleMouseOver = event =>{
    document.body.style.cursor = 'move';
    event.stopPropagation();
  }
    return (
      <>
        <div className="ApplicationTopBar" onMouseOver={handleMouseOver}>
          <h5>About Me</h5>
            <MinMaxClose toggleVisibility={toggleVisibility}/>
        </div>
      </>
    )
  }
  
  export default ApplicationTopBar