import React, { useState } from "react";
// Import images
import LoadMoreButton from "./LoadMoreButton";
// Import components
import ProjectCard from "./ProjectCard";
import MinemationText from "./../MinemationText/Minemationtext";
import ModalSlider from "../ModalSlider";

const getIndex = (index) => {
  if (index < 10) return `0${index}`;

  return index;
};

const ProjectPage = ({ content }) => {
  const [projectList, setProjectList] = useState(
    [...content.projectList].slice(0, 8)
  );

  const [modalActive, setModalActive] = useState(false);
  const [modalIndex, setModalIndex] = useState();

  const handleLoadMore = () => {
    setProjectList((prev) =>
      [...content.projectList].slice(0, prev.length + 8)
    );
  };

  return (
    <div className="project-page">
      <div className="container project-container">
        <div className="project-title title">
          <div className="first-div"></div>
          <h1 className="text-box">
            <div className="title-wrapper">
              <MinemationText
                text={content.projectTitle}
                animationName="fadeInUp"
                delay={200}
                duration={1000}
                overflowHidden
                scroll={false}
                windowHeight={90}
                scrollRepeat={false}
              />
            </div>
          </h1>
          <div></div>
        </div>

        {projectList.map((project, index) => (
          <ProjectCard
            scroll={index === 0 ? false : true}
            key={index}
            title={`${getIndex(index + 1)}. ${project.title}`}
            sq={project.sqm}
            openModal={() => {
              setModalIndex(index);
              setModalActive(true);
            }}
            location={project.location}
            projectImage={
              process.env.PUBLIC_URL + `/projectPage/${project.image}`
            }
            last={index === projectList.length - 1}
          />
        ))}

        {modalActive && (
          <ModalSlider
            closeModal={() => setModalActive(false)}
            index={getIndex(modalIndex + 1)}
            title={projectList[modalIndex].title}
            images={projectList[modalIndex].slider}
          />
        )}

        <LoadMoreButton
          handleLoadMore={handleLoadMore}
          disable={content.projectList.length === projectList.length}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
