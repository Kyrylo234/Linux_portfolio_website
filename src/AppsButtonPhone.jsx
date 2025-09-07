import AppsButton from './AppsButton.jsx';
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
      <AppsButton title={title} source={source}  alternative={alternative} onClick={handleClick}/>
    </div>
  );
}
export default AppsButtonPhone