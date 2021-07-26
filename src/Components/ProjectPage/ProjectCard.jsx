import React from "react";
// Import image
import location from "../../assets/image/black-location.svg";

const ProjectCard = (props) => {
  return (
    <div className="project-card container">
      <div className={`text ${props.last ? "last" : ""}`}>
        <h2>{props.title}</h2>

        <div className="bottom">
          <div className="m2">{props.sq}</div>
          <div className="location">
            <img src={location} alt="" />
            {props.location}
          </div>
        </div>
      </div>
      <div
        className="image"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${props.projectImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        desno
      </div>
    </div>
  );
};

export default ProjectCard;
