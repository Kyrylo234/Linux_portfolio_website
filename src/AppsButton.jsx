function AppsButton({title, source, alternative}) {  
    
    return (
      <>
        <div className="Application">
        <img
            className="AppLogo"
            src={source}
            alt={alternative}
            width={50}
            height={50}
        />
        <h5>{title}</h5>
        </div>
      </>
    )
  }
  
  export default AppsButton