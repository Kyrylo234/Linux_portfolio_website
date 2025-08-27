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
    <div style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory" }}>
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            flex: "0 0 100%",      // each slide takes full width
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "center",
            overflow: "hidden",   // ✅ clip any overflow
          }}
        >
          <img src={src} alt="" style={imgStyle} />
        </div>
      ))}
    </div>
  );
}