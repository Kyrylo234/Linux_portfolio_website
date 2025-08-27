import { useEffect, useRef } from "react";

export default function Carousel({ images , imgStyle, imgAlt}) {
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const child = container.children[indexRef.current];
        if (child) {
          container.scrollTo({
            left: child.offsetLeft,
            behavior: "smooth"
          });
        }

        indexRef.current = (indexRef.current + 1) % images.length;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        overflowX: "auto",   // allows swipe
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        flex: "0 0 100%", 
        justifyContent: "center", 
        alignItems: "center", 
        scrollSnapAlign: "center" 
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`carousel-${i}`}
          style={imgStyle}
        />
      ))}
    </div>
  );
}