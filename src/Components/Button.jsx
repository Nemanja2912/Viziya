import React from "react";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <NavLink to={`/${props.link}`} className="button">
      {props.text}
    </NavLink>
  );
};

export default Button;
