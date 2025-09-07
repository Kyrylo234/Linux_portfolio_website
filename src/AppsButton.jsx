function AppsButton({title, source, alternative, onClick}) {  
    return (
      <button className="Application" onClick={onClick}>
        <img
            className="AppLogo"
            src={source}
            alt={alternative}
        />
        <h5>{title}</h5>
      </button>
    )
  }
  
  export default AppsButton