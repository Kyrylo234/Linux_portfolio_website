import { useEffect, useRef, useCallback } from "react";

export default function Carousel({ images, imgStyle, imgAlt }) {
  const containerRef = useRef(null);
  const indexRef = useRef(0);
  const hasMultiple = images.length > 1;

  const scrollToIndex = useCallback((i) => {
    const container = containerRef.current;
    if (!container) return;
    const child = container.children[i];
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
    indexRef.current = i;
  }, []);

  const goNext = useCallback(() => {
    scrollToIndex((indexRef.current + 1) % images.length);
  }, [images.length, scrollToIndex]);

  const goPrev = useCallback(() => {
    scrollToIndex((indexRef.current - 1 + images.length) % images.length);
  }, [images.length, scrollToIndex]);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              scrollSnapAlign: "center",
              overflow: "hidden",
            }}
          >
            <img src={src} alt={imgAlt || ""} style={imgStyle} />
          </div>
        ))}
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 36,
              height: 36,
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ‹
          </button>

          <button
            onClick={goNext}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 36,
              height: 36,
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}