import React from "react";

function Circle ({num, color, onChangeColor}) {
  return(
    <button className={`circle color-${num} ${num === color ? "active" : null}`} onClick={() => onChangeColor(num)}>
      {num}
    </button>
  );
}

export default Circle;