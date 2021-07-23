import React from "react";
import ProjectBox from "./ProjectBox";

const HomeProjects = () => {
  return (
    <div className="home-projects container">
      <div className="empty-box"></div>
      <div className="empty-box2"></div>
      <div className="left">
        <h2>Make plans visual</h2>
        <p>
          You can get 3D-visualisation images, animations and videos for your
          architectural projects from the Gork Studio. We create realistic
          computer graphics for residential, commercial and industrial real
          estate and urban spaces.
        </p>
      </div>
      <div className="right">
        <ProjectBox
          projectName="Development technical
terms of reference"
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
    </div>
  );
};

export default HomeProjects;
