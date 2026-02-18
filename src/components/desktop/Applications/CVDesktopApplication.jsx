import PDFViewer from '../../shared/PDFViewer';
import DraggableApplication from "../../../DraggableApplication";
import ApplicationTopBar from "../../../ApplicationTopBar";
import React, {useRef,} from "react";

function CVDesktopApplication({ appWindow, setWindows, onClose, onToggleVisibility, onFocus }) {
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
            <a href="/assets/Kyrylo_Postupalenko_CV.pdf" download="cv" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#444",
                  color: "white",
                  cursor: "pointer"
              }}>Download my CV</button>
            </a>
            {<PDFViewer file="/assets/Kyrylo_Postupalenko_CV.pdf" />}
          </div>
        </div>
      </DraggableApplication>
    </div>
  );
}
export default CVDesktopApplication;