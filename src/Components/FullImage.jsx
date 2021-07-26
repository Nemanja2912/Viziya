import React from "react";

const FullImage = (props) => {
  return (
    <div
      className="image"
      style={{
        background: `url(${props.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    ></div>
  );
};

export default FullImage;
