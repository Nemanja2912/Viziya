import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Next from "../assets/image/next2.svg";
import Prev from "../assets/image/prev2.svg";

const ModalSlider = ({ images, closeModal, index, title }) => {
  const sliderRef = useRef(null);

  const handleChange = (side) => {
    const width = sliderRef.current
      .querySelector(".image-wrapper")
      .getBoundingClientRect().width;

    if (side === "right") {
      sliderRef.current.scrollLeft += width;
    } else if (side === "left") {
      sliderRef.current.scrollLeft -= width;
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-slider">
      <div className="background" onClick={closeModal}></div>
      <div className="slider-body">
        <div className="top">
          <div className="title">
            {index}. {title}
          </div>
          <div className="close" onClick={closeModal}>
            Close
          </div>
        </div>
        <div className="image-box">
          <div className="image-slider" ref={sliderRef}>
            {images.map((image) => {
              return (
                <div className="image-wrapper">
                  <img
                    src={process.env.PUBLIC_URL + "/projectPage/" + image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div
            className="prev slider-button"
            onClick={() => handleChange("left")}
          >
            <img src={Prev} alt="" />
          </div>
          <div
            className="next slider-button"
            onClick={() => handleChange("right")}
          >
            <img src={Next} alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default ModalSlider;
