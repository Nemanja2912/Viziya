import React, { useState } from "react";
// Import Images
import moreButton from "../../assets/image/more-button.svg";
import { Link } from "react-router-dom";

const ProjectBox = ({
  projectImage,
  projectName,
  active,
  setActiveIndex,
  index,
  setPreventInterval,
  content,
}) => {
  return (
    <div
      className={`project-box ${active && "active-box"}`}
      onMouseEnter={() => {
        setPreventInterval(true);
        setActiveIndex(index);
      }}
      onMouseLeave={() => setPreventInterval(false)}
    >
      <div className="content">
        <div className={`img-box ${active && "active-img-box"}`}>
          <div className="opq"></div>
          <img src={projectImage} alt="" />
        </div>
        <h4>{projectName}</h4>

        <div className={`bottom ${active && "active"}`}>
          <Link to="/services">
            <p>{content.projectBoxButton}</p>
          </Link>
          <img src={moreButton} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
