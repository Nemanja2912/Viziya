import React from "react";

const CollapseBody = (props) => {
  return (
    <>
      <div className="top">
        <p className="description">{props.description}</p>
      </div>
      <div className="bottom">
        <p className="price">
          <span>{props.priceTitle}</span>
          <span>{props.price}</span>
        </p>
        <p className="smaller">{props.note}</p>
      </div>
    </>
  );
};

export default CollapseBody;
