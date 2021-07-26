import React from "react";
// Import Images
import moreButton from "../../assets/image/more-button.svg";

const ProjectBox = (props) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${props.projectImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="project-box"
    >
      <h4>{props.projectName}</h4>

      <div className={`bottom ${props.active ? "active" : ""}`}>
        <p>More</p>
        <img src={moreButton} alt="" />
      </div>
    </div>
  );
};

export default ProjectBox;
