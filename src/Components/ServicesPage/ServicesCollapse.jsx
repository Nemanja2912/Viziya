import React, { useState, useEffect } from "react";
// Import images
import collapse1 from "../../assets/image/service1.jpg";
import collapse2 from "../../assets/image/service2.jpg";
import collapse3 from "../../assets/image/service3.jpg";
import collapse4 from "../../assets/image/service4.jpg";
// Import components
import CollapseButton from "./CollapseButton";
import CollapseBody from "./CollapseBody";
import MinemationText from "./../MinemationText/Minemationtext";

const imageList = [collapse1, collapse2, collapse3, collapse4];

const ServicesCollapse = ({ content, priceTitle, note }) => {
  const [collapseButton, setCollapseButton] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [startTransition, setStartTransition] = useState("open");

  const startAnimation = (index) => {
    setCollapseButton(index);
    setStartTransition("close");

    setTimeout(() => {
      setActiveButton(index);

      setTimeout(() => {
        setStartTransition("open");
      }, 200);
    }, 500);
  };

  return (
    <div className="services-collapse">
      <div className="button-tabs">
        {content.map((text, index) => (
          <CollapseButton
            key={index}
            text={content[index].button}
            setActiveButton={() => startAnimation(index)}
            active={index === collapseButton}
          />
        ))}
      </div>
      <div className="collapse-body">
        <div
          className={`image ${
            startTransition === "open"
              ? "open-image"
              : startTransition === "close"
              ? "close-image"
              : ""
          }`}
        >
          <img src={imageList[activeButton === -1 ? 0 : activeButton]} alt="" />
        </div>
        <div
          className="top"
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
          <p className="description">{content[activeButton].description}</p>
        </div>
        <div
          className="bottom"
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
          <p className="price">
            <span>{priceTitle}</span>
            <span>{content[activeButton].price}</span>
          </p>
          <p className="smaller">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCollapse;
