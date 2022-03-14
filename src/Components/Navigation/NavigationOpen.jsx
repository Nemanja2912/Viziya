import React, { useContext } from "react";
// Import React Router
import { Link } from "react-router-dom";
// Import components
import ContactForm from "../ContactPage/ContactForm";
import Navigation from "./Navigation";
// Import Context
import { navMenuOpen } from "../../App";
import Button from "../Button";

const NavigationMenu = ({ language, setLanguage, active, content }) => {
  const navMenu = useContext(navMenuOpen);

  const currentYear = new Date().getFullYear();

  return (
    <div className={`navigation-menu ${active ? "navigation-menu-open" : ""}`}>
      <div style={{ height: `${window.innerHeight}px` }} className="container">
        <Navigation
          content={content}
          close
          setLanguage={setLanguage}
          language={language}
        />
        <div className="nav-body">
          <div className="left">
            <div className="top">
              <div className="items-list">
                <Link to="/">
                  <div className="nav-item-wrapper">
                    <p
                      onClick={navMenu}
                      className={`item hidden-item  ${active && "item1 show"}`}
                    >
                      {content.homePage}
                    </p>
                  </div>
                </Link>
                <Link to="/projects">
                  <div className="nav-item-wrapper">
                    <p
                      onClick={navMenu}
                      className={`item hidden-item  ${active && "item2 show"}`}
                    >
                      {content.projectsPage}
                    </p>
                  </div>
                </Link>
                <Link to="/about">
                  <div className="nav-item-wrapper">
                    <p
                      onClick={navMenu}
                      className={`item hidden-item  ${active && "item3 show"}`}
                    >
                      {content.aboutUsPage}
                    </p>
                  </div>
                </Link>
                <Link to="/services">
                  <div className="nav-item-wrapper">
                    <p
                      onClick={navMenu}
                      className={`item hidden-item  ${active && "item4 show"}`}
                    >
                      {content.servicesPage}
                    </p>
                  </div>
                </Link>
                <Link to="/contact">
                  <div className="nav-item-wrapper">
                    <p
                      onClick={navMenu}
                      className={`item hidden-item  ${active && "item5 show"}`}
                    >
                      {content.contactsPage}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cont-info">
              <p className="desktop">office@viziya.rs</p>
              <p className="desktop">+7 (916) 45-34-33</p>
              <div className="mob">
                <a href="mailto:office@viziya.rs" className="button">
                  {content.mobButton}
                </a>

                <p className="opacity">© 1999 – {currentYear} Viziya</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="text">
              <p className="title">
                {content.formText}{" "}
                <span className="hide">{content.formText2}</span>
              </p>
              <ContactForm content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
