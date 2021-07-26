import React from "react";
// Import image
import map from "../../assets/image/map.svg";

const ContactTitle = () => {
  return (
    <div className="title-section">
      <div className="title">
        <h1>Contact</h1>
        <p>
          We are always open for cooperation <br /> and are glad to see new
          projects
        </p>
      </div>
      <div className="box2">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default ContactTitle;
