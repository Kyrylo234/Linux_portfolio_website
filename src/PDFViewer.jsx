import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;
function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        const baseWidth = 800; // PDF page render baseline width
        setScale(width / baseWidth);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages > 0 &&
          Array.from({ length: numPages }, (_, index) => (
            <div
              key={index + 1}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                marginBottom: `${20 * scale}px`,
              }}
            >
              <Page pageNumber={index + 1} width={800} />
            </div>
          ))}
      </Document>
    </div>
  );
}

export default PDFViewer;