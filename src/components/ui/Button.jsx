import React from "react";

function Button({label,type,className}) {
  return (
    <button
      type={type}
      className={className}
    >
      {label}
    </button>
  );
}

export default Button;
