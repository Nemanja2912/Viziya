import React from "react";

const CollapseButton = (props) => {
  return (
    <div className={`collapse-button ${props.active ? "active" : ""}`}>
      {props.text}
    </div>
  );
};

export default CollapseButton;
