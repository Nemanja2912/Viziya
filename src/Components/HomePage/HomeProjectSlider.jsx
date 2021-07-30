import React from "react";
// Import images
import prev from "../../assets/image/prev.svg";
import next from "../../assets/image/next.svg";
// Import Components
import Button from "./../Button";

const HomeProjectSlider = () => {
  return (
    <div className="home-project-slider">
      <div className="container">
        <div className="empty-box empty-box1"></div>
        <div className="empty-box empty-box2"></div>
        <div className="empty-box empty-box3"></div>
        <div className="empty-box empty-box4"></div>
        <div className="image-box"></div>
        <div className="left">
          <div className="title">
            <h2>Projects</h2>
          </div>
          <div className="empty-box empty-box5"></div>
          <div className="description-box">
            <div className="text">
              <h4>01. Forest house</h4>
              <p>
                This visualization project is about the building in the
                historical center of Omsk city, Russia. Initially, it was built
                as a hotel for the 2018 FIFA world Cup, but the project was not
                completed as supposed.
              </p>
            </div>
            <Button text="Learn more" />
          </div>
          <div className="empty-box empty-box6"></div>
          <div className="prev nav-button">
            <img src={prev} alt="" />
          </div>
          <div className="next nav-button">
            <img src={next} alt="" />
          </div>
        </div>
        <div className="empty-box empty-box7"></div>
        <div className="empty-box empty-box8"></div>
        <div className="empty-box empty-box9"></div>
        <div className="empty-box empty-box10"></div>
      </div>
    </div>
  );
};

export default HomeProjectSlider;
