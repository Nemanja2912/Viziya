import React, { useContext, useState } from "react";
// Import images
import logoWhite from "../../assets/image/logo-white.svg";
import logoBlack from "../../assets/image/logo-black.svg";
import logoWhiteMin from "../../assets/image/logo-white-min.svg";
import logoBlackMin from "../../assets/image/logo-black-min.svg";
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
        <picture>
          <source
            media="(min-width: 1101px)"
            srcset={props.black ? logoBlack : logoWhite}
          />
          <img src={props.black ? logoBlackMin : logoWhiteMin} alt="" />
        </picture>
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
