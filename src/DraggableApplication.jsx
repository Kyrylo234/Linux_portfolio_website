import React, { forwardRef } from "react";

const EDGE_THRESHOLD = 10;

const TEXT_TAGS = new Set([
  "p","span","a","h1","h2","h3","h4","h5","h6",
  "label","small","em","strong","code","pre",
  "li","blockquote","mark","i","b","u","s"
]);

const DraggableApplication = forwardRef(
  ({ window, setWindows, children }, ref) => {
    // ---- Helpers ----
    const updateWindowProperties = (element) => {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === window.id
            ? {
                ...w,
                width: parseInt(element.style.width),
                height: parseInt(element.style.height),
                left: parseInt(element.style.left),
                top: parseInt(element.style.top),
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
      const initialWidth = element.clientWidth;
      const initialHeight = element.clientHeight;
      const startX = initialX - element.offsetLeft;
      const startY = initialY - element.offsetTop;

      const action = getActionAtPosition(element, initialX, initialY);

      const handlers = {
        "resize-tl": ({ x, y }) => {
          element.style.width = `${initialWidth + initialX - x}px`;
          element.style.height = `${initialHeight + initialY - y}px`;
          element.style.left = `${x - startX}px`;
          element.style.top = `${y - startY}px`;
        },
        "resize-tr": ({ x, y }) => {
          element.style.width = `${initialWidth + x - initialX}px`;
          element.style.height = `${initialHeight + initialY - y}px`;
          element.style.top = `${y - startY}px`;
        },
        "resize-bl": ({ x, y }) => {
          element.style.width = `${initialWidth - x + initialX}px`;
          element.style.height = `${initialHeight + y - initialY}px`;
          element.style.left = `${x - startX}px`;
        },
        "resize-br": ({ x, y }) => {
          element.style.width = `${initialWidth + x - initialX}px`;
          element.style.height = `${initialHeight + y - initialY}px`;
        },
        "resize-l": ({ x }) => {
          element.style.width = `${initialWidth + initialX - x}px`;
          element.style.left = `${x - startX}px`;
        },
        "resize-r": ({ x }) => {
          element.style.width = `${initialWidth + x - initialX}px`;
        },
        "resize-t": ({ y }) => {
          element.style.height = `${initialHeight - y + initialY}px`;
          element.style.top = `${y - startY}px`;
        },
        "resize-b": ({ y }) => {
          element.style.height = `${initialHeight + y - initialY}px`;
        },
        drag: ({ x, y }) => {
          element.style.left = `${x - startX}px`;
          element.style.top = `${y - startY}px`;
        },
      };

      addHandler(handlers[action]);
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
          width: window.width + "px",
          height: window.height + "px",
          left: window.left + "px",
          top: window.top + "px",
        }}
      >
        {children}
      </div>
    );
  }
);

export default DraggableApplication;