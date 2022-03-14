import React from "react";
// Import Components
import Button from "./../Button";
import { NavLink } from "react-router-dom";

const HomeHero = ({ content }) => {
  return (
    <div className="home-hero">
      <div className="container">
        <div className="middle-section">
          <div className="empty-box2"></div>
          <div className="heading">
            <h1>{content.homeHeroTitle}</h1>
            <p>{content.homeHeroDescription}</p>
          </div>
          <div className="empty-box"></div>
        </div>
        <div className="bottom-section">
          <div className="contact-box">
            <Button text={content.homeHeroButton1} link="contact" />
          </div>
          <div className="empty-box"></div>
          <div className="project-box">
            <Button text={content.homeHeroButton2} link="projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
