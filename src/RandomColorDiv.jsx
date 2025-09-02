import React, { useState } from "react";

// Generate vivid background color
function getRandomVividColor() {
  const r = Math.floor(Math.random() * 200 + 55);
  const g = Math.floor(Math.random() * 200 + 55);
  const b = Math.floor(Math.random() * 200 + 55);
  return { r, g, b };
}

// Generate a contrasting text color with some hue variation
function getContrastingColor({ r, g, b }) {
  const factor = 1.5;
  const tr = Math.min(255, Math.floor(r * factor));
  const tg = Math.min(255, Math.floor(g * factor));
  const tb = Math.min(255, Math.floor(b * factor));
  const brightness = (tr * 299 + tg * 587 + tb * 114) / 1000;
  if (brightness > 200) {
    return `rgb(${r / 2},${g / 2},${b / 2})`;
  }
  return `rgb(${tr},${tg},${tb})`;
}

function RandomColorDiv({ text }) {
  const [bgColorObj] = useState(getRandomVividColor());
  const bgColor = `rgb(${bgColorObj.r},${bgColorObj.g},${bgColorObj.b})`;
  const textColor = getContrastingColor(bgColorObj);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "50px",
        height: "50px",
        borderRadius: "12px",
        margin: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: textColor, // 🔥 makes `currentColor` work in SVGs
      }}
    >
      {typeof text === "string" ? (
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="currentColor" // 🔥 now uses parent `color`
            fontSize="40"
            fontWeight="bold"
          >
            {text}
          </text>
        </svg>
      ) : React.isValidElement(text) ? (
        React.cloneElement(text, {
          width: "80%",
          height: "80%",
          style: { color: textColor }, // 🔥 forces SVG to use same textColor
        })
      ) : null}
    </div>
  );
}

export default RandomColorDiv;