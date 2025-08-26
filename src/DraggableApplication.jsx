import React, { useRef} from 'react';
function DraggableApplication({ children, appProperties, setAppProperties}) {
    const elementRef = useRef(null);
    

    const handleMouseMove = event =>{
      const element = elementRef.current;
      const handleMouseOff = event =>{
        document.body.style.cursor = 'auto';
        document.removeEventListener('mouseout', handleMouseOff);
      }

      document.addEventListener('mouseout', handleMouseOff);
      
      const target = event.nativeEvent.target;
      const current = event.currentTarget; // the element with the handler

      if (current.classList.contains("DraggableApplication") && target === current) {
        if((event.nativeEvent.offsetX<10 || event.nativeEvent.offsetX> (element.clientWidth-10)) && (event.nativeEvent.offsetY<10 || event.nativeEvent.offsetY> (element.clientHeight-10))){ //If corners
          if(event.nativeEvent.offsetX<(element.clientWidth/2)){ //left
            if(event.nativeEvent.offsetY<(element.clientHeight/2)){ //top
              document.body.style.cursor = 'nwse-resize';
            }else{ //bottom
              document.body.style.cursor = 'nesw-resize';
            }
          }else{ //right
            if(event.nativeEvent.offsetY<(element.clientHeight/2)){ //top
              document.body.style.cursor = 'nesw-resize';
            }else{ //bottom
              document.body.style.cursor = 'nwse-resize';
            }
          }
        }else if(event.nativeEvent.offsetX<10 || event.nativeEvent.offsetX> (element.clientWidth-10)){
          //resize on the sides
          document.body.style.cursor = 'ew-resize';

        }else if(event.nativeEvent.offsetY<10 || event.nativeEvent.offsetY> (element.clientHeight-10)){
          //resize
          document.body.style.cursor = 'ns-resize';
        }else{ //Move the application around
          document.body.style.cursor = 'move';
        }
      } else {
        if (event.target.classList.contains("ApplicationOptionsOption") || (event.target.closest(".ApplicationOptionsOption") && event.target.tagName.toLowerCase() === "h5")) {
          document.body.style.cursor = "pointer";
        } else {
          document.body.style.cursor = "move";
        }
      }

      
    }
  
    const handleMouseDown = (event) => {
        const element = elementRef.current;

        const initialX = event.pageX;
        const initialY = event.pageY;
        const initialWidth = element.clientWidth;
        const initialHeight = element.clientHeight;
        const startX = event.pageX - element.offsetLeft;
        const startY = event.pageY - element.offsetTop;

        const handleMouseMoveResizeTopLeft = (moveEvent) => {
          element.style.width = `${initialWidth + initialX - moveEvent.pageX}px`;
          element.style.height = `${initialHeight + initialY - moveEvent.pageY}px`;
          element.style.left = `${moveEvent.pageX - startX}px`;
          element.style.top = `${moveEvent.pageY - startY}px`;
        };

        const handleMouseMoveResizeTopRight = (moveEvent) => {
          element.style.width = `${initialWidth + moveEvent.pageX - initialX}px`;
          element.style.height = `${initialHeight + initialY - moveEvent.pageY}px`;
          element.style.top = `${moveEvent.pageY - startY}px`;
        };

        const handleMouseMoveResizeBottomLeft = (moveEvent) => {
          element.style.width = `${initialWidth - moveEvent.pageX + initialX}px`;
          element.style.height = `${initialHeight + moveEvent.pageY - initialY}px`;
          element.style.left = `${moveEvent.pageX - startX}px`;
        };

        const handleMouseMoveResizeBottomRight = (moveEvent) => {
          element.style.width = `${initialWidth + moveEvent.pageX - initialX}px`;
          element.style.height = `${initialHeight + moveEvent.pageY - initialY}px`;
        };

        const handleMouseMoveResizeEastWestLeft = (moveEvent) => {
          element.style.width = `${initialWidth + initialX - moveEvent.pageX}px`;
          element.style.left = `${moveEvent.pageX - startX}px`;
        };

        const handleMouseMoveResizeEastWestRight = (moveEvent) => {
          element.style.width = `${initialWidth + moveEvent.pageX - initialX}px`;
        };

        const handleMouseMoveResizeNorthSouthTop = (moveEvent) => {
          element.style.height = `${initialHeight - moveEvent.pageY + initialY}px`;
          element.style.top = `${moveEvent.pageY - startY}px`;
        };

        const handleMouseMoveResizeNorthSouthBottom = (moveEvent) => {
          element.style.height = `${initialHeight + moveEvent.pageY - initialY}px`;
        };

        
        if (!event.target.classList.contains("ApplicationOptionsOption") || !(event.target.closest(".ApplicationOptionsOption") && event.target.tagName.toLowerCase() === "h5")) {
          if((event.nativeEvent.offsetX<10 || event.nativeEvent.offsetX> (element.clientWidth-10)) && (event.nativeEvent.offsetY<10 || event.nativeEvent.offsetY> (element.clientHeight-10))){ //If corners
          if(event.nativeEvent.offsetX<(element.clientWidth/2)){ //left
            if(event.nativeEvent.offsetY<(element.clientHeight/2)){ //top
              document.addEventListener('mousemove', handleMouseMoveResizeTopLeft);

            
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMoveResizeTopLeft);
                document.removeEventListener('mouseup', handleMouseUp);
                setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
              }
              document.addEventListener('mouseup', handleMouseUp);
            }else{ //bottom
              document.addEventListener('mousemove', handleMouseMoveResizeBottomLeft);
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMoveResizeBottomLeft);
                document.removeEventListener('mouseup', handleMouseUp);
                setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
              }
              document.addEventListener('mouseup', handleMouseUp);
            }
          }else{ //right
            if(event.nativeEvent.offsetY<(element.clientHeight/2)){ //top
              document.addEventListener('mousemove', handleMouseMoveResizeTopRight);
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMoveResizeTopRight);
                document.removeEventListener('mouseup', handleMouseUp);
                setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
              }
              document.addEventListener('mouseup', handleMouseUp);
            }else{ //bottom
              document.addEventListener('mousemove', handleMouseMoveResizeBottomRight);
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMoveResizeBottomRight);
                document.removeEventListener('mouseup', handleMouseUp);
                setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
              }
              document.addEventListener('mouseup', handleMouseUp);
            }
          }
        }else if(event.nativeEvent.offsetX<5 || event.nativeEvent.offsetX> (element.clientWidth-5)){
          //resize on the sides
          if(event.nativeEvent.offsetX<(element.clientWidth/2)){ //left side
            document.addEventListener('mousemove', handleMouseMoveResizeEastWestLeft);
              
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMoveResizeEastWestLeft);
              document.removeEventListener('mouseup', handleMouseUp);
              setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
            }
            document.addEventListener('mouseup', handleMouseUp);

          }else{ //Right side
              document.addEventListener('mousemove', handleMouseMoveResizeEastWestRight);
              
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMoveResizeEastWestRight);
              document.removeEventListener('mouseup', handleMouseUp);
              setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
            }
            document.addEventListener('mouseup', handleMouseUp);
          }
        }else if(event.nativeEvent.offsetY<10 || event.nativeEvent.offsetY> (element.clientHeight-10)){
          //resize

          if(event.nativeEvent.offsetY<(element.clientHeight/2)){ //Top
            document.addEventListener('mousemove', handleMouseMoveResizeNorthSouthTop);
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMoveResizeNorthSouthTop);
              document.removeEventListener('mouseup', handleMouseUp);
              setAppProperties({...appProperties,top:Number((element.style.top).substring(0, element.style.top.length - 2))});
            }
            document.addEventListener('mouseup', handleMouseUp);

          }else{ //Bottom
              document.addEventListener('mousemove', handleMouseMoveResizeNorthSouthBottom);

            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMoveResizeNorthSouthBottom);
              document.removeEventListener('mouseup', handleMouseUp);
              setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
            }
            document.addEventListener('mouseup', handleMouseUp);
          }
        }else{ //Move the application around

          const handleMouseMove = (moveEvent) => {
            element.style.left = `${moveEvent.pageX - startX}px`;
            element.style.top = `${moveEvent.pageY - startY}px`;
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          

          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            setAppProperties({width:(element.style.width).substring(0, element.style.width.length - 2), height:(element.style.height).substring(0, element.style.height.length - 2), left:(element.style.left).substring(0, element.style.left.length - 2), top:(element.style.top).substring(0, element.style.top.length - 2)});
          }

          document.addEventListener('mouseup', handleMouseUp);
        }
        }
    };
  
    return (
      <div
        ref={elementRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleMouseDown}
        onMouseMove={handleMouseMove}
        className='DraggableApplication'
        style={{ position: 'absolute', width: appProperties.width+'px', height: appProperties.height+'px', left:appProperties.left+'px', top:appProperties.top+'px'}}
      >
        {children}
      </div>
    );
  }

export default DraggableApplication;