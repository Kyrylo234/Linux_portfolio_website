const DOCK_WIDTH = 60;
const SIDE_GAP = 8;
export const MIN_WIDTH = 300;
export const MIN_HEIGHT = 150;
const VISIBLE_TITLEBAR_WIDTH = 75;
const TITLEBAR_HEIGHT = 30;

export const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);

export function getWindowLimits(viewportWidth, viewportHeight) {
  return {
    left: DOCK_WIDTH + SIDE_GAP,
    right: viewportWidth - SIDE_GAP,
    top: viewportHeight * 0.03,
    bottom: viewportHeight - SIDE_GAP,
  };
}

export function getDragLimits(width, viewportWidth, viewportHeight) {
  const workArea = getWindowLimits(viewportWidth, viewportHeight);
  return {
    left: workArea.left + VISIBLE_TITLEBAR_WIDTH - width,
    right: workArea.right - VISIBLE_TITLEBAR_WIDTH,
    top: workArea.top,
    bottom: workArea.bottom - TITLEBAR_HEIGHT,
  };
}

export function fitWindowToViewport(window, viewportWidth, viewportHeight) {
  const limits = getWindowLimits(viewportWidth, viewportHeight);
  const availableWidth = Math.max(MIN_WIDTH, limits.right - limits.left);
  const availableHeight = Math.max(MIN_HEIGHT, limits.bottom - limits.top);
  const width = clamp(window.width, MIN_WIDTH, availableWidth);
  const height = clamp(window.height, MIN_HEIGHT, availableHeight);

  return {
    ...window,
    width,
    height,
    left: clamp(window.left, limits.left, limits.right - width),
    top: clamp(window.top, limits.top, limits.bottom - height),
  };
}
