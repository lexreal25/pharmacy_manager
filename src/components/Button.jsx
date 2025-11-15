import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      type="submit"
      style={{ backgroundColor: "red", marginTop: "0.2rem" }}
    >
      {props.name}
    </button>
  );
};

export default Button;
