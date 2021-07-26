import React from "react";
// Import svg
import button from "../../assets/image/arrow-down.svg";

const AccordionBox = (props) => {
  return (
    <div className="accordion-box">
      <div className="text">
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
      </div>
      <div className="button">
        <img src={button} alt="" />
      </div>
    </div>
  );
};

export default AccordionBox;
