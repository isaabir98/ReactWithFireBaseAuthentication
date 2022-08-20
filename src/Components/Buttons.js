import React from "react";
const Buttons = ({ color, text, onclick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Buttons;
