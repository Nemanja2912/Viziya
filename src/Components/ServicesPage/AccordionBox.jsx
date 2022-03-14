import React, { useRef, useEffect, useState } from "react";
// Import svg
import button from "../../assets/image/arrow-down.svg";

const AccordionBox = (props) => {
  const topRef = useRef(null);
  const accordionRef = useRef(null);
  const [openBox, setOpenBox] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      accordionRef.current.style.height =
        topRef.current.getBoundingClientRect().height + "px";
    }, 100);
  }, []);

  useEffect(() => {
    const changeSize = () => {
      if (!openBox) {
        accordionRef.current.style.height =
          topRef.current.getBoundingClientRect().height + "px";
      } else {
        accordionRef.current.style.height =
          accordionRef.current.scrollHeight + "px";
      }
    };

    window.addEventListener("resize", changeSize);

    return () => window.removeEventListener("resize", changeSize);
  }, [openBox]);

  const handleExpand = () => {
    setOpenBox((prev) => !prev);
    if (openBox) {
      accordionRef.current.style.height =
        topRef.current.getBoundingClientRect().height + "px";
    } else {
      accordionRef.current.style.height =
        accordionRef.current.scrollHeight + "px";
    }
  };

  return (
    <div ref={accordionRef} className="accordion-box">
      <div className="text">
        <div className="top" ref={topRef}>
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
        </div>
        <div className="body">
          <p className="description">{props.body}</p>
        </div>
      </div>
      <div className="button" onClick={handleExpand}>
        <div className="button-box">
          <img
            src={button}
            alt=""
            style={{ transform: openBox ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionBox;
