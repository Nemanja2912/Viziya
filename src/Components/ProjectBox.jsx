import React from "react";
// Import Images
import moreButton from "../assets/image/more-button.svg";

const ProjectBox = (props) => {
  return (
    <div className="project-box">
      <h4>{props.projectName}</h4>

      <div className="bottom">
        <p>More</p>
        <img src={moreButton} alt="" />
      </div>
    </div>
  );
};

export default ProjectBox;
