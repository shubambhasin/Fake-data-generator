import React from "react";
import "../button/Button.css";
const Button = ({ btnName = "Button Name" }) => {
  return <button className="btn-primary">{btnName}</button>;
};

export default Button;
