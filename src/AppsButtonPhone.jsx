function AppsButtonPhone({title, source, alternative, link}) {  
  const handleClick = () => {
    if(typeof link === 'function'){
      link();
    }else{
      window.open(link, '_blank').focus();
    }
};
    
    return (
      <>
        <div className='item' onClick={handleClick}>
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
        </div>
      </>
    )
  }
  
  export default AppsButtonPhone