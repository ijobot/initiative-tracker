import React from "react";

const Button = ({ color, text, onClick, className }) => {
  return (
    <button
      className={className}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;