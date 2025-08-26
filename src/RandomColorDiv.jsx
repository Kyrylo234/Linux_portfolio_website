import React, { useState } from "react";

function RandomColorDiv({ text }) {
  // Generate random color once
  const [randomColor] = useState(() => {
    let value = Math.floor(Math.random()*16777215).toString(16);
    if(value.length<=5){
      value+='0'
    }
    return '#' + value;
  });

  return (
    <div
      style={{
        backgroundColor: randomColor,
        display: "inline-block",   // shrink-wrap around text
        padding: "5px 7px",
        margin: "1px 1px",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px",
      }}
    >
      {text}
    </div>
  );
}

export default RandomColorDiv;