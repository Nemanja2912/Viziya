import React, { useEffect, useState, useRef } from "react";
// Import image
import Pointer from "../../assets/image/black-location.svg";
import scrollEventListener from "../../shareFunction/scrollEventListener";
import MinemationText from "./../MinemationText/Minemationtext";

const ProjectCard = ({
  scroll = true,
  scrollRepeat = false,
  windowHeight = 90,
  last,
  title,
  sq,
  projectImage,
  location,
  openModal,
}) => {
  const [startAnimation, setStartAnimation] = useState(!scroll);
  const [startAnimation2, setStartAnimation2] = useState(!scroll);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(
    () =>
      scrollEventListener(
        screenHeight,
        windowHeight,
        scrollRepeat,
        scroll,
        containerRef,
        setStartAnimation
      ),
    []
  );

  useEffect(
    () =>
      scrollEventListener(
        screenHeight,
        windowHeight,
        scrollRepeat,
        scroll,
        containerRef2,
        setStartAnimation2
      ),
    []
  );

  return (
    <>
      <div className="project-card container" ref={containerRef}>
        <div className={`text ${last ? "last" : ""}`}>
          <h2 className="text-box">
            <MinemationText
              text={title}
              animationName="fadeInUp"
              delay={200}
              duration={1000}
              overflowHidden
              scroll={scroll}
              windowHeight={90}
              scrollRepeat={false}
            />
          </h2>

          <div className="bottom" ref={containerRef2}>
            <div className={`bottom-box ${startAnimation2 && "active-bottom"}`}>
              <div className="m2  ">{sq}</div>
              <div className="location">
                <img src={Pointer} alt="" />
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`image ${startAnimation ? "open-image" : "close-image"}`}
          style={{
            background: `url(${projectImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          onClick={openModal}
        >
          <div className="wrapper">
            <p>LEARN MORE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
