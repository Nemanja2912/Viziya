import React from "react";
import LanguageButton from "./LanguageButton";
import logo from "../assets/image/logo-white.svg";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="language-box">
        <LanguageButton lang="RU" />
        <LanguageButton lang="SR" />
        <LanguageButton lang="EN" />
      </div>
      <div className="logo-box">
        <img src={logo} alt="" />
      </div>
      <div className="wrapper-box">
        <div className="menu-box">MENU</div>
      </div>
    </nav>
  );
};

export default Navigation;
