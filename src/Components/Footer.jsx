import React from "react";
// Import images
import logo from "../assets/image/logo-white.svg";
import location from "../assets/image/location.svg";
import { NavLink } from "react-router-dom";

const Footer = ({ content, nav }) => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <div>
            <img src={logo} className="logo" alt="" />
            <div className="location">
              <p>
                {content.address} <br /> {content.city}
              </p>
              <img src={location} alt="" />
            </div>
          </div>
          <div className="created">
            <p className="opacity">{content.created}</p>
            <p>{content.author}</p>
          </div>
        </div>
        <div className="middle">
          <NavLink to="/">
            <p>{nav.homePage}</p>
          </NavLink>
          <NavLink to="/about">
            <p>{nav.aboutUsPage}</p>
          </NavLink>
          <NavLink to="/services">
            <p>{nav.servicesPage}</p>
          </NavLink>
          <NavLink to="/projects">
            <p>{nav.projectsPage}</p>
          </NavLink>
          <NavLink to="/contact">
            <p>{nav.contactsPage}</p>
          </NavLink>
        </div>
        <div className="right">
          <div className="box1">
            <p className="opacity">{content.phoneLabel}</p>
            <p>{content.phone}</p>
          </div>
          <div className="box2">
            <div>
              <p className="opacity">{content.emailLabel}</p>
              <p>{content.email}</p>
            </div>
          </div>
          <div className="box3">
            <div className="created2">
              <p className="opacity">{content.created}</p>
              <p className="name2">{content.author}</p>
            </div>
            <p className="opacity">{content.copyrights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
