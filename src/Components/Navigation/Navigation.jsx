import React, { useContext, useState } from "react";
// Import images
import logoWhite from "../../assets/image/logo-white.svg";
import logoBlack from "../../assets/image/logo-black.svg";
// Import components
import LanguageButton from "./LanguageButton";
// Import Context
import { navMenuOpen } from "../../App";

const Navigation = (props) => {
  const navMenu = useContext(navMenuOpen);

  return (
    <nav className={`container ${props.black ? "blackNav" : ""}`}>
      <div className="language-box">
        <LanguageButton lang="RU" />
        <LanguageButton lang="SR" />
        <LanguageButton lang="EN" />
      </div>
      <div className="logo-box">
        <img src={props.black ? logoBlack : logoWhite} alt="" />
      </div>
      <div className="wrapper-box">
        <div className="menu-box">
          {props.close ? (
            <p onClick={navMenu}>CLOSE</p>
          ) : (
            <p onClick={navMenu}>MENU</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
