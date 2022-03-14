import React, { useState, useRef } from "react";
// Import images
import prev from "../../assets/image/prev.svg";
import next from "../../assets/image/next.svg";
// Import Components
import Button from "./../Button";
import { Link } from "react-router-dom";
import MinemationText from "./../MinemationText/Minemationtext";

const HomeProjectSlider = ({ content }) => {
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderRef = useRef(null);
  const [disableSlider, setDisableSlider] = useState(false);
  const [startTransition, setStartTransition] = useState("");

  const handleChange = (dir) => {
    if (disableSlider) return;

    if (dir === "right") {
      if (activeSlider === content.projectSlider.length - 1) return;
    } else if (dir === "left") {
      if (activeSlider === 0) return prev;
    }

    setDisableSlider(true);
    setStartTransition("close");

    setTimeout(() => {
      setStartTransition("open");
    }, 500);

    setTimeout(() => {
      setDisableSlider(false);
    }, 1000);

    setTimeout(() => {
      setActiveSlider((prev) => {
        const width = sliderRef.current
          .querySelector(".image-wrapper")
          .getBoundingClientRect().width;

        let activeIndex = prev;

        if (dir === "right") {
          if (prev === content.projectSlider.length - 1) return prev;
          activeIndex++;

          sliderRef.current.scrollLeft = width * activeIndex;
          return activeIndex;
        } else if (dir === "left") {
          if (prev === 0) return prev;
          activeIndex--;

          sliderRef.current.scrollLeft = width * activeIndex;
          return activeIndex;
        }
      });
    }, 500);
  };

  return (
    <div className="home-project-slider">
      <div className="container">
        <div className="empty-box empty-box1"></div>
        <div className="empty-box empty-box2"></div>
        <div className="empty-box empty-box3"></div>
        <div className="empty-box empty-box4"></div>
        <div
          className={`image-box ${
            startTransition === "open"
              ? "open-image"
              : startTransition === "close"
              ? "close-image"
              : ""
          }`}
          ref={sliderRef}
        >
          <div className="image-body">
            {content.projectSlider.map((slider, index) => (
              <div
                key={index}
                className="image-wrapper"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + `/projectSlider/${slider.image}`
                  })`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="left">
          <div className="title">
            <h2>
              <MinemationText
                text={content.projectSliderTitle}
                animationName="fadeInUp"
                delay={200}
                duration={1000}
                overflowHidden
                scroll={true}
                windowHeight={90}
                scrollRepeat={false}
              />
            </h2>
          </div>
          <div className="empty-box empty-box5"></div>
          <div className="description-box">
            <div
              className="text"
              style={{
                opacity:
                  startTransition === "open"
                    ? 1
                    : startTransition === "close"
                    ? 0
                    : "",
                transition: "0.5s",
              }}
            >
              <h4>{content.projectSlider[activeSlider].title}</h4>
              <p>{content.projectSlider[activeSlider].desc}</p>
            </div>
            <Button text={content.projectSliderButton} link="projects" />
          </div>
          <div className="empty-box empty-box6"></div>
          <div className="prev nav-button" onClick={() => handleChange("left")}>
            <img src={prev} alt="" />
          </div>
          <div
            className="next nav-button"
            onClick={() => handleChange("right")}
          >
            <img src={next} alt="" />
          </div>
        </div>
        <div className="empty-box empty-box7"></div>
        <div className="empty-box empty-box8"></div>
        <div className="empty-box empty-box9"></div>
        <div className="empty-box empty-box10"></div>
      </div>
    </div>
  );
};

export default HomeProjectSlider;
