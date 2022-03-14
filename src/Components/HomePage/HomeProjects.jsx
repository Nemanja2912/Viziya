import React, { useState, useEffect } from "react";
// Import Images
import Project1 from "../../assets/image/project-box1.jpg";
import Project2 from "../../assets/image/project-box2.jpg";
import Project3 from "../../assets/image/project-box3.jpg";
import Project4 from "../../assets/image/project-box4.jpg";
import Project5 from "../../assets/image/project-box5.jpg";
import Project6 from "../../assets/image/project-box6.jpg";
// Import Components
import ProjectBox from "./ProjectBox";
import MinemationText from "./../MinemationText/Minemationtext";

const projectBoxImgList = [
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
];

let activeInterval;

const HomeProjects = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [preventInterval, setPreventInterval] = useState(false);

  const intervalFunc = () => {
    activeInterval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === projectBoxImgList.length - 1) return 0;

        return prev + 1;
      });
    }, 3000);
  };

  useEffect(() => {
    if (preventInterval) clearInterval(activeInterval);
    else intervalFunc();
  }, [preventInterval]);

  return (
    <div className="home-projects container">
      <div className="empty-box"></div>
      <div className="empty-box2"></div>
      <div className="text">
        <h2>
          <MinemationText
            text={content.homeProjectTitle}
            animationName="fadeInUp"
            delay={200}
            duration={1000}
            overflowHidden
            scroll={true}
            windowHeight={90}
            scrollRepeat={false}
          />
        </h2>
        <div>
          <MinemationText
            text={content.homeProjectDescription}
            animationName="fadeInUp"
            delay={200}
            duration={1000}
            overflowHidden
            scroll={true}
            windowHeight={90}
            scrollRepeat={false}
          />
        </div>
      </div>

      <div className="diagonal-line">
        <svg>
          <line x1="0" y1="0" x2="100%" y2="100%" />
        </svg>
      </div>
      {content.projectBoxList?.map((projectBox, projectBoxIndex) => (
        <ProjectBox
          key={projectBoxIndex}
          projectName={projectBox}
          projectImage={projectBoxImgList[projectBoxIndex]}
          active={activeIndex === projectBoxIndex}
          setActiveIndex={setActiveIndex}
          index={projectBoxIndex}
          setPreventInterval={setPreventInterval}
          content={content}
        />
      ))}
    </div>
  );
};

export default HomeProjects;
