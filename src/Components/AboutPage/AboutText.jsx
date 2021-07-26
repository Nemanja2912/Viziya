import React from "react";

const AboutText = (props) => {
  return (
    <div className="about-text container">
      {props.title ? <h2>{props.title}</h2> : ""}
      <p>{props.text}</p>
    </div>
  );
};

export default AboutText;
