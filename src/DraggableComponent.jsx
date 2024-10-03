import React, { useRef, useState } from 'react';
function DraggableComponent({ children, source, order}) {
    const elementRef = useRef(null);
    const [isDragging, setDragging] = useState(false);
    const offsetFromTop = (40+order*85)+'px';
  
    const handleMouseDown = (event) => {
        
        const element = elementRef.current;
        const startX = event.pageX - element.offsetLeft;
        const startY = event.pageY - element.offsetTop;
  
        const handleMouseMove = (moveEvent) => {
            document.body.style.cursor = 'move';
            setDragging(true)
            element.style.left = `${moveEvent.pageX - startX}px`;
            element.style.top = `${moveEvent.pageY - startY}px`;
        };
  
        document.addEventListener('mousemove', handleMouseMove);
  
        document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.body.style.cursor = 'auto';
      });
    };

    const handleClick = () => {
        if(isDragging === false){
            if(typeof source === 'function'){
              source()
            }else{
              window.open(source, '_blank').focus();
            }
            
        }
        setDragging(false);
    };

    const handleMouseOver = () => {
      document.body.style.cursor = 'pointer';
    }

    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
    }
  
    return (
      <div
        ref={elementRef}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        onTouchMove={handleMouseDown}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'absolute', left: '65px', top: offsetFromTop}}
      >
        {children}
      </div>
    );
  }

export default DraggableComponent;