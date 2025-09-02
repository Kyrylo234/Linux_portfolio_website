function TaskBarButtonActive({image, alt, toggleVisibility, style}) {
    return (
        <div className='Task' onClick={toggleVisibility} style={style}><img src={image} alt={alt} loading="lazy"></img></div>
    );
  }
  
  export default TaskBarButtonActive;