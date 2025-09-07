function AppsButtonPhone({title, source, alternative, link}) {  
  const handleClick = () => {
    if(typeof link === 'function'){
      link();
    }else{
      window.open(link, '_blank').focus();
    }
};
    
    return (
      <div className='item'>
        <div className="Application"  onClick={handleClick}>
        <img
            className="AppLogo"
            src={source}
            alt={alternative}
        />
        <h5>{title}</h5>
        </div>
      </div>
    )
  }
  
  export default AppsButtonPhone