import React from "react";

const AboutImage = ({ content }) => {
  return (
    <div className="about-image container">
      <p>
        {content.line1} <br /> {content.line2} <br /> {content.line3}
      </p>
    </div>
  );
};

export default AboutImage;
