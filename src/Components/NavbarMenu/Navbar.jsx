import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;
    root.style.setProperty("--colorWhite", darkMode ? "#ffffff" : "#000000");
    root.style.setProperty("--colorBody", darkMode ? "#151515" : "#e1f1f8");
    root.style.setProperty("--colorBlack", darkMode ? "#ffffff" : "#000000");
    root.style.setProperty("--colorlightWhite",darkMode ? "#ffffff" : "#000000");
  };
  return (
    <>
      <nav className="navbarSection">
        <ul className="nav-listUl">
          <li className="mainLogo">
            <Link className="mainLogoGif" to="/">
              <img src="../src/img/logo-MainIcon.gif" alt="" />
            </Link>
          </li>
          <a
            className={darkMode ? "DarkMood" : "LightMood"}
            onClick={toggleDarkMode}
            title={darkMode ? "Turn on Dark Mode" : "Turn on Light Mode"} // Tooltip text based on darkMode state
          >
            {darkMode ? (
              <i className="fa-solid fa-moon moonIcon moonAnt"></i>
            ) : (
              <i className="fa-solid fa-sun sunIcon moonIcon"></i>
            )}
          </a>
          <li
            className={`NavigationList ${
              isActive("/about-me") ? "active" : ""
            }`}
          >
            <Link to="/about-me">About</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-blogs") ? "active" : ""
            }`}
          >
            <Link to="/my-blogs">Blogs</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-projects") ? "active" : ""
            }`}
          >
            <Link to="/my-projects">Projects</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-resume") ? "active" : ""
            }`}
          >
            <Link to="/my-resume">Resume</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-photo-gallery") ? "active" : ""
            }`}
          >
            <Link to="/my-photo-gallery">Photo Gallery</Link>
          </li>
          <li className="NavigationList">
            <button className="btn_Button" href="/">
              Hire Me
            </button>
          </li>
          <button
            className={isOpen ? "CloseIcon" : "MenuIcon"}
            onClick={toggleMenu}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </ul>
      </nav>
      <aside className={isOpen ? "MenuSideOpen" : "MenuSideClosed"}>
        <ul className="nav-listAside">
          <li
            className={`NavigationList ${
              isActive("/about-me") ? "active" : ""
            }`}
          >
            <Link to="/about-me">About</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-blogs") ? "active" : ""
            }`}
          >
            <Link to="/my-blogs">Blogs</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-projects") ? "active" : ""
            }`}
          >
            <Link to="/my-projects">Projects</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-resume") ? "active" : ""
            }`}
          >
            <Link to="/my-resume">Resume</Link>
          </li>
          <li
            className={`NavigationList ${
              isActive("/my-photo-gallery") ? "active" : ""
            }`}
          >
            <Link to="/my-photo-gallery">Photo Gallery</Link>
          </li>
          <li className="NavigationList">
            <button className="btn_Button" href="/">
              Hire Me
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
