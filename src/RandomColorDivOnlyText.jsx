import React, { useState } from "react";

// Generate vivid background color
function getRandomVividColor() {
  const r = Math.floor(Math.random() * 200 + 55);
  const g = Math.floor(Math.random() * 200 + 55);
  const b = Math.floor(Math.random() * 200 + 55);
  return { r, g, b };
}

// Generate a contrasting text color
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

function RandomColorDivOnlyText({ text }) {
  const [bgColorObj] = useState(getRandomVividColor());
  const bgColor = `rgb(${bgColorObj.r},${bgColorObj.g},${bgColorObj.b})`;
  const textColor = getContrastingColor(bgColorObj);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        display: "inline-block", // shrink-wrap around text
        padding: "5px 10px",
        margin: "2px",
        color: textColor, // 🔥 contrasting color
        fontWeight: "bold",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}

export default RandomColorDivOnlyText;