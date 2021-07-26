import React from "react";
// Import images
import image from "../../assets/image/project-box1.jpg";
import LoadMoreButton from "./LoadMoreButton";
// Import components
import ProjectCard from "./ProjectCard";
import ProjectTitle from "./ProjectTitle";

const maping = [1, 2, 3, 4];

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="container project-container">
        <ProjectTitle />

        {maping.map((project, index) => (
          <ProjectCard
            title="01. Forest house"
            sq="261 sq.m."
            location="Switzerland"
            projectImage={image}
            last={index === maping.length - 1}
          />
        ))}

        <LoadMoreButton />
      </div>
    </div>
  );
};

export default ProjectPage;
