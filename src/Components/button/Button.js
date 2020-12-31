import React from "react";
import "../button/Button.css";
const Button = ({ btnName = "Button Name" }) => {
  return (
    <button
      onClick={() => window.location.reload(false)}
      className="btn-primary"
    >
      {btnName}
    </button>
  );
};

export default Button;
