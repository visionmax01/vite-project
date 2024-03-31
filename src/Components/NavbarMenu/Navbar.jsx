import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className='navbarSection'>
        <ul className='nav-listUl'>
          <li className='mainLogo'><Link className='mainLogoGif' to="/"><img src="../src/img/logo-MainIcon.gif" alt="" /></Link></li>
          <li className='NavigationList'><a href="/aboute-me">About</a></li>
          <li className='NavigationList'><a href="/my-blogs">Blogs</a></li>
          <li className='NavigationList'><a href="/my-projects">Project</a></li>
          <li className='NavigationList'><a href="/my-resume">Resume</a></li>
          <li className='NavigationList'><a href="/my-photo-gallery">Photo Gallery</a></li>
          <li className='NavigationList'><button className='btn_Button' href="/">Hire Me</button></li>
          <button className='MinuIcon'>☰</button> 
        </ul>
      </nav>
      <aside className='MenuSideOpen'>
        <ul className='nav-listAside'>
          <li className='mainLogo'>BHISHAN SAH</li>
          <li className='NavigationList'><a href="/">About</a></li>
          <li className='NavigationList'><a href="/">Project</a></li>
          <li className='NavigationList'><a href="/">Resume</a></li>
          <li className='NavigationList'><a href="/">Photo Gallery</a></li>
          <button className='btn_Button' href="/">Hire Me</button>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
