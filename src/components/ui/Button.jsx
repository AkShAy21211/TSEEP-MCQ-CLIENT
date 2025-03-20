import React from "react";

function Button({ label, type, className, icon, iconClassName, isRight ,onClick,disabled}) {
  return (
    <button 
    disabled={disabled} onClick={onClick}
    type={type} className={className}>
      {!isRight && <img className={iconClassName} src={icon} />}
      {label}
      {isRight && <img alt={label} className={iconClassName} src={icon} />}
    </button>
  );
}

export default Button;
