function TaskBarButton({source, image, alt}) {
    function openWebsite(){
        window.open(source, '_blank').focus();
    }
    return (
        <div className='Task' onClick={openWebsite}><img src={image} alt={alt} loading="lazy"></img></div>
    );
  }
  
  export default TaskBarButton;