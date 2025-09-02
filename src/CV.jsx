import PDFViewer from './PDFViewer';
import DraggableApplication from "./DraggableApplication";
import ApplicationTopBar from "./ApplicationTopBar";
import React, {useRef,} from "react";

function RunningApplication({ appWindow, setWindows, onClose, onToggleVisibility }) {
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
    <div className="RunningApplicationWrapper">
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
            {<PDFViewer file="/assets/Kyrylo_Postupalenko_CV.pdf" />}
          </div>
        </div>
      </DraggableApplication>
    </div>
  );
}
export default RunningApplication;