import React, { useContext } from "react";
// Import React Router
import { Link } from "react-router-dom";
// Import components
import ContactForm from "../ContactPage/ContactForm";
import Navigation from "./Navigation";
// Import Context
import { navMenuOpen } from "../../App";

const NavigationMenu = () => {
  const navMenu = useContext(navMenuOpen);

  return (
    <div className="navigation-menu">
      <div className="container">
        <Navigation close />
        <div className="nav-body">
          <div className="left">
            <div className="top">
              <div className="items-list">
                <Link to="/">
                  <p onClick={navMenu} className="item">
                    Home
                  </p>
                </Link>
                <Link to="/projects">
                  <p onClick={navMenu} className="item">
                    Projects
                  </p>
                </Link>
                <Link to="/about">
                  <p onClick={navMenu} className="item">
                    About us
                  </p>
                </Link>
              </div>
              <div className="items-list">
                <Link to="/services">
                  <p onClick={navMenu} className="item">
                    Services
                  </p>
                </Link>
                <Link to="/contact">
                  <p onClick={navMenu} className="item">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="cont-info">
              <p>office@viziyaarch.com</p>
              <p>+7 (916) 45-34-33</p>
            </div>
          </div>
          <div className="right">
            <div className="text">
              <p>Leave a request to start working together</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
