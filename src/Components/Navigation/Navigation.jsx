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
import { NavLink } from "react-router-dom";

const langList = ["RU", "SR", "EN"];

const Navigation = ({ black, language, setLanguage, close, content }) => {
  const navMenu = useContext(navMenuOpen);

  const [langBar, setLangBar] = useState(false);

  return (
    <nav className={`container ${black ? "blackNav" : ""}`}>
      <div className="language-box" onClick={() => setLangBar((prev) => !prev)}>
        {langList.map((lang, langIndex) => (
          <LanguageButton
            key={langIndex}
            lang={lang}
            active={language === lang}
            langBar={langBar}
            setLanguage={() => {
              if (window.innerWidth <= 650) {
                if (langBar) {
                  setLanguage(lang);
                }
              } else {
                setLanguage(lang);
              }
            }}
          />
        ))}
      </div>
      <div className="logo-box">
        <NavLink to="/">
          <picture>
            <source
              media="(min-width: 1101px)"
              srcSet={black ? logoBlack : logoWhite}
            />
            <img src={black ? logoBlackMin : logoWhiteMin} alt="" />
          </picture>
        </NavLink>
      </div>
      <div className="wrapper-box">
        <div className="menu-box">
          {close ? (
            <p onClick={navMenu}>{content.close}</p>
          ) : (
            <p onClick={navMenu}>{content.menu}</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
