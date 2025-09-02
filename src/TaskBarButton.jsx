function TaskBarButton({ type = "button", source, onClick, image, alt, tooltip, style , toggleVisibility}) {
  const content = <img src={image} alt={alt} loading="lazy" />;

  return (
    <div className='Task' style={style}>
    <div className="tooltip-wrapper">
        
      {type === "link" ? (
        <a href={source} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <button
          onClick={toggleVisibility}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {content}
        </button>
      )}
      {/* Tooltip text */}
      {tooltip && <span className="tooltip-text">{tooltip}</span>}
      </div>
    </div>
  );
}

export default TaskBarButton;