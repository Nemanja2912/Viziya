import React, { useState, useEffect } from "react";

import Logo from "../assets/image/logo-white-min.svg";

const Loader = ({ loaded }) => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  }, []);

  return (
    <div
      className="loader"
      style={{
        height: window.innerHeight,
        top: isLoad && loaded ? "-120%" : "0%",
      }}
    >
      <div className="logo-box">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Loader;
