import React from "react";

const Title = (props) => {
  return (
    <div className="title-univerzal container">
      <h1>{props.title}</h1>
      <div className="empty-box"></div>
    </div>
  );
};

export default Title;
