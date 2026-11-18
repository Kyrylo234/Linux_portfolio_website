import React, { forwardRef, useState, useEffect  } from "react";
import { clamp, getDragLimits, getWindowLimits, MIN_HEIGHT, MIN_WIDTH } from "./components/desktop/windowBounds";

const EDGE_THRESHOLD = 10;

const TEXT_TAGS = new Set([
  "p","span","a","h1","h2","h3","h4","h5","h6",
  "label","small","em","strong","code","pre",
  "li","blockquote","mark","i","b","u","s"
]);

const DraggableApplication = forwardRef(
  ({ window, setWindows, children }, ref) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    // ---- Helpers ----
    const updateWindowProperties = (element) => {
      if (document.fullscreenElement === element) return;

      const geometry = {
        width: parseInt(element.style.width, 10),
        height: parseInt(element.style.height, 10),
        left: parseInt(element.style.left, 10),
        top: parseInt(element.style.top, 10),
      };
      setWindows((prev) =>
        prev.map((w) =>
          w.id === window.id
            ? {
                ...w,
                ...geometry,
              }
            : w
        )
      );
    };

    const getClientCoords = (event) => {
      if (event.touches && event.touches.length > 0) {
        return { x: event.touches[0].pageX, y: event.touches[0].pageY };
      }
      return { x: event.pageX, y: event.pageY };
    };

    const getActionAtPosition = (element, x, y) => {
      const rect = element.getBoundingClientRect();
      const nearLeft = x - rect.left < EDGE_THRESHOLD;
      const nearRight = rect.right - x < EDGE_THRESHOLD;
      const nearTop = y - rect.top < EDGE_THRESHOLD;
      const nearBottom = rect.bottom - y < EDGE_THRESHOLD;

      if ((nearLeft || nearRight) && (nearTop || nearBottom)) {
        if (nearLeft && nearTop) return "resize-tl";
        if (nearLeft && nearBottom) return "resize-bl";
        if (nearRight && nearTop) return "resize-tr";
        if (nearRight && nearBottom) return "resize-br";
      } else if (nearLeft) return "resize-l";
      else if (nearRight) return "resize-r";
      else if (nearTop) return "resize-t";
      else if (nearBottom) return "resize-b";

      return "drag";
    };

    const getCursorForAction = (action) => {
      switch (action) {
        case "resize-tl":
        case "resize-br":
          return "nwse-resize";
        case "resize-tr":
        case "resize-bl":
          return "nesw-resize";
        case "resize-l":
        case "resize-r":
          return "ew-resize";
        case "resize-t":
        case "resize-b":
          return "ns-resize";
        case "drag":
          return "move";
        default:
          return "default";
      }
    };

    const addHandler = (moveHandler) => {
      const element = ref.current;

      const handleMove = (e) => moveHandler(getClientCoords(e));
      const handleUp = () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleUp);
        updateWindowProperties(element);
        document.body.style.cursor = "default";
      };

      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", handleUp);
    };

    // ---- Exclusion checker ----
    const isInvalidTarget = (target) => {
      if (target?.nodeType === Node.TEXT_NODE) return true;

      const el = target?.nodeType === Node.ELEMENT_NODE ? target : target?.parentElement;
      if (!el) return false;

      if (
        el.closest(".ApplicationsOptionsoption") ||
        el.closest(".no-drag") ||
        el.closest("[data-no-drag]")
      ) return true;

      const tag = el.tagName?.toLowerCase();
      if (TEXT_TAGS.has(tag)) return true;

      return false;
    };

    // ---- Cursor feedback ----
    const handleMouseMove = (event) => {
      const element = ref.current;
      const target = event.nativeEvent.target;
      const current = event.currentTarget;

      if (current.contains(target) && !isInvalidTarget(target)) {
        const { x, y } = getClientCoords(event);
        const action = getActionAtPosition(element, x, y);
        document.body.style.cursor = getCursorForAction(action);
      } else {
        document.body.style.cursor = "default";
      }
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "default";
    };

    // ---- Mouse/Touch Down ----
    const handleDown = (event) => {
      const element = ref.current;
      const target = event.nativeEvent.target;
      const current = event.currentTarget;

      if (!current.contains(target) || isInvalidTarget(target)) return;

      event.preventDefault();

      const { x: initialX, y: initialY } = getClientCoords(event);
      const initialLeft = element.offsetLeft;
      const initialTop = element.offsetTop;
      const initialRight = initialLeft + element.offsetWidth;
      const initialBottom = initialTop + element.offsetHeight;
      const limits = getWindowLimits(document.documentElement.clientWidth, document.documentElement.clientHeight);
      const dragLimits = getDragLimits(element.offsetWidth, document.documentElement.clientWidth, document.documentElement.clientHeight);

      const action = getActionAtPosition(element, initialX, initialY);

      addHandler(({ x, y }) => {
        const dx = x - initialX;
        const dy = y - initialY;
        let left = initialLeft;
        let right = initialRight;
        let top = initialTop;
        let bottom = initialBottom;

        if (action === "drag") {
          left = clamp(initialLeft + dx, dragLimits.left, dragLimits.right);
          top = clamp(initialTop + dy, dragLimits.top, dragLimits.bottom);
          right = left + element.offsetWidth;
          bottom = top + element.offsetHeight;
        } else {
          const edges = action.slice(7);
          if (edges.includes("l")) left = clamp(initialLeft + dx, limits.left, right - MIN_WIDTH);
          if (edges.includes("r")) right = clamp(initialRight + dx, left + MIN_WIDTH, limits.right);
          if (edges.includes("t")) top = clamp(initialTop + dy, limits.top, bottom - MIN_HEIGHT);
          if (edges.includes("b")) bottom = clamp(initialBottom + dy, top + MIN_HEIGHT, limits.bottom);
        }

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
        element.style.width = `${right - left}px`;
        element.style.height = `${bottom - top}px`;
      });
    };

    return (
      <div
        ref={ref}
        onMouseDown={handleDown}
        onTouchStart={handleDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="DraggableApplication"
        style={{
          position: "absolute",
          width: isFullscreen ? "100vw" : window.width + "px",
          height: isFullscreen ? "100vh" : window.height + "px",
          left: isFullscreen ? "0" : window.left + "px",
          top: isFullscreen ? "0" : window.top + "px",
        }}
      >
        {children}
      </div>
    );
  }
);

export default DraggableApplication;
