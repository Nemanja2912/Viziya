import React from "react";
// Import Images
import project1 from "../../assets/image/project-box1.jpg";
// Import Components
import ProjectBox from "./ProjectBox";

const HomeProjects = () => {
  return (
    <div className="home-projects container">
      <div className="empty-box"></div>
      <div className="empty-box2"></div>
      <div className="text">
        <h2>Make plans visual</h2>
        <p>
          You can get 3D-visualisation images, animations and videos for your
          architectural projects from the Gork Studio. We create realistic
          computer graphics for residential, commercial and industrial real
          estate and urban spaces.
        </p>
      </div>

      <div className="diagonal-line">
        <svg>
          <line x1="0" y1="0" x2="100%" y2="100%" />
        </svg>
      </div>
      <ProjectBox
        projectName="Development technical
terms of reference"
        projectImage={project1}
        active={true}
      />
      <ProjectBox projectName="Preliminary design" />
      <ProjectBox projectName="Interior design" />
      <ProjectBox projectName="Working project" />
      <ProjectBox projectName="Project management" />
      <ProjectBox
        projectName="Construction and repair
of the object"
      />
    </div>
  );
};

export default HomeProjects;
