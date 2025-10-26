import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function ReadMe({ title, link, desc }) {
  const containerRef = useRef(null);
  const calendarWrapperRef = useRef(null);
  const [blockSize, setBlockSize] = useState(14);
  const blockMargin = 2;
  const minBlockSize = 6; // minimum block size

  useEffect(() => {
    if (!calendarWrapperRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const width = calendarWrapperRef.current.offsetWidth;
      const weeks = 53; // GitHub contributions chart has ~53 weeks
      const calculatedSize = Math.max(
        Math.floor((width - weeks * blockMargin) / weeks),
        minBlockSize
      );
      setBlockSize(calculatedSize);
    });

    resizeObserver.observe(calendarWrapperRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return ( // comment
    <div
      ref={containerRef}
      style={{
        margin: "10px",
        padding: "5px",
        border: "2px solid #dddddd8e",
        borderRadius: "8px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          marginTop: "5px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h4 style={{ marginBottom: "4px", marginTop: "0" }}>
          <a
            href={link}
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            {title}
          </a>
        </h4>

        {desc && (
          <p
            style={{
              margin: "8px 0 12px 0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              color: "#eee",
              fontWeight: "300",
              whiteSpace: "pre-line",
            }}
          >
            {desc}
          </p>
        )}

        {/* Calendar wrapper at 80% width */}
        <div
          ref={calendarWrapperRef}
          style={{
            width: "95%",
            margin: "0 auto", // center horizontally
            transition: "all 0.3s ease",
            contentAlign: "center",
          }}
        >
          <GitHubCalendar
            username="Kyrylo234"
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={Math.max(blockSize * 1.1, 10)}
            color="#00FFAA"
          />
        </div>
      </div>
    </div>
  );
}

export default ReadMe;