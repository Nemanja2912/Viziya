import React from "react";

const CollapseBody = (props) => {
  return (
    <div className="collapse-body">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="text">
        <div className="top">
          <p className="description">{props.description}</p>
        </div>
        <div className="bottom">
          <div className="bottom-text-wrapper">
            <p className="price">
              <span>Price starting at: </span>
              <span>${props.price}/m2</span>
            </p>
            <p>
              *the rate depends on the project size and other specifications
            </p>
          </div>
        </div>
      </div>
      <div className="empty-box1"></div>
      <div className="empty-box2"></div>
    </div>
  );
};

export default CollapseBody;
