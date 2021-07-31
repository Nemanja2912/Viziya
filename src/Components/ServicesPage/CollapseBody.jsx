import React from "react";

const CollapseBody = (props) => {
  return (
    <div className="collapse-body">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="top">
        <p className="description">{props.description}</p>
      </div>
      <div className="bottom">
        <p className="price">
          <span>Price starting at: </span>
          <span>${props.price}/m2</span>
        </p>
        <p className="smaller">
          *the rate depends on the project size and other specifications
        </p>
      </div>
    </div>
  );
};

export default CollapseBody;
