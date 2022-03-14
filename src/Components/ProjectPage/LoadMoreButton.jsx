import React from "react";

const LoadMoreButton = ({ handleLoadMore, disable }) => {
  return (
    <div onClick={handleLoadMore} className="load-more">
      <p style={{ display: disable ? "none" : "", cursor: "pointer" }}>
        Load more
      </p>
    </div>
  );
};

export default LoadMoreButton;
