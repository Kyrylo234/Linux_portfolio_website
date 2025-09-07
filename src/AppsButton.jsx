function AppsButton({title, source, alternative}) {  
    
    return (
      <>
        <div className="Application">
        <img
            className="AppLogo"
            src={source}
            alt={alternative}
        />
        <h5>{title}</h5>
        </div>
      </>
    )
  }
  
  export default AppsButton