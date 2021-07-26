import React from "react";
// Import Components
import Button from "./../Button";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="container">
        <div className="middle-section">
          <div className="heading">
            <h1>Architecture and design</h1>
            <p>
              We design buildings and interiors; streetscapes and landscapes;
              graphics and wayfinding.
            </p>
          </div>
          <div className="empty-box"></div>
        </div>
        <div className="bottom-section">
          <div className="contact-box">
            <Button text="Contact us" />
          </div>
          <div className="empty-box"></div>
          <div className="project-box">
            <Button text="All project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
