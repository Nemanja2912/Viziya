import React from "react";

const HomeImageArea = ({ content }) => {
  return (
    <div className="home-image-area">
      <div className="container">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="image-box">
          <div className="image">
            <p>{content.imageAreaText}</p>
          </div>
        </div>
        <div className="box4"></div>
        <div className="box5"></div>
        <div className="box6"></div>
      </div>
    </div>
  );
};

export default HomeImageArea;
