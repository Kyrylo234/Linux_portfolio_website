function TaskBarButtonActive({image, alt, toggleVisibility, buttonColour}) {
    return (
        <div className='Task' onClick={toggleVisibility} style={buttonColour}><img src={image} alt={alt} loading="lazy"></img></div>
    );
  }
  
  export default TaskBarButtonActive;