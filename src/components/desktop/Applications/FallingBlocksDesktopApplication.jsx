import DraggableApplication from "../../../DraggableApplication.jsx";
import ApplicationTopBar from "../../../ApplicationTopBar.jsx";
import React, {useRef,} from "react";
import Tetris from "../../../FallingBlocks.jsx";

function FallingBlocksDesktopApplication({ appWindow, setWindows, onClose, onToggleVisibility, onFocus }) {
  const appContainerRef = useRef(null);

  // forward fullscreen requests to parent
  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      appContainerRef.current?.requestFullscreen?.();
    }
  };

  return (
    <div className="RunningApplicationWrapper" style={{ zIndex: appWindow.order, ...appWindow.style }} onMouseDown={onFocus}>
      <DraggableApplication
        window={appWindow}
        setWindows={setWindows}
        ref={appContainerRef}
      >
        <ApplicationTopBar
          toggleVisibility={() => onToggleVisibility?.(appWindow.id)}
          close={() => onClose?.(appWindow.id)}
          setFullScreen={handleFullScreen}
          title={appWindow.title}
        />
        <div className="RunningApplication">
          <div
            className="Contents"
            style={{
              overflow: "scroll",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none" // IE/Edge
            }}
          >
            {<Tetris/>}
          </div>
        </div>
      </DraggableApplication>
    </div>
  );
}
export default FallingBlocksDesktopApplication;