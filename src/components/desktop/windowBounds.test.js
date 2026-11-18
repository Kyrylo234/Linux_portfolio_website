import { fitWindowToViewport, getDragLimits } from './windowBounds';

test('keeps both opening windows reachable at the desktop breakpoint', () => {
  const viewport = { width: 768, height: 600 };
  const windows = [
    { width: 500, height: 500, left: 150, top: 50 },
    { width: 500, height: 500, left: 700, top: 100 },
  ];

  windows.forEach((win) => {
    const fitted = fitWindowToViewport(win, viewport.width, viewport.height);
    expect(fitted.left).toBeGreaterThanOrEqual(68);
    expect(fitted.top).toBeGreaterThanOrEqual(viewport.height * 0.03);
    expect(fitted.left + fitted.width).toBeLessThanOrEqual(viewport.width - 8);
    expect(fitted.top + fitted.height).toBeLessThanOrEqual(viewport.height - 8);
  });
});

test('shrinks a window when the desktop viewport gets narrower', () => {
  const fitted = fitWindowToViewport(
    { width: 900, height: 700, left: -50, top: -20 }, 800, 500
  );

  expect(fitted).toEqual({ width: 724, height: 477, left: 68, top: 15 });
});

test('allows partial offscreen dragging while leaving the title bar reachable', () => {
  expect(getDragLimits(500, 768, 600)).toEqual({
    left: -357,
    right: 685,
    top: 18,
    bottom: 562,
  });
});
