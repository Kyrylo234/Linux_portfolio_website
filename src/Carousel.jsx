import { useEffect, useRef } from "react";

export default function Carousel({ images }) {
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
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`carousel-${i}`}
          style={{             
            width: '100%',              
            height:'auto',              
            paddingTop:'10px',   
            scrollSnapAlign: "start", 
            objectFit: "contain",         
            flex: "0 0 100%"}}
        />
      ))}
    </div>
  );
}