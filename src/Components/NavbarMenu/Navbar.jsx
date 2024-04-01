import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='navbarSection'>
        <ul className='nav-listUl'>
          <li className='mainLogo'>
            <Link className='mainLogoGif' to='/'>
              <img src='../src/img/logo-MainIcon.gif' alt='' />
            </Link>
          </li>
          <li className='NavigationList'><a href='/aboute-me'>About</a></li>
          <li className='NavigationList'><a href='/my-blogs'>Blogs</a></li>
          <li className='NavigationList'><a href='/my-projects'>Project</a></li>
          <li className='NavigationList'><a href='/my-resume'>Resume</a></li>
          <li className='NavigationList'><a href='/my-photo-gallery'>Photo Gallery</a></li>
          <li className='NavigationList'><button className='btn_Button' href='/'>Hire Me</button></li>
          <button className={isOpen ? 'CloseIcon' : 'MenuIcon'} onClick={toggleMenu}>{isOpen ? '✕' : '☰'}</button>
        </ul>
      </nav>
      <aside className={isOpen ? 'MenuSideOpen' : 'MenuSideClosed'}>
        <ul className='nav-listAside'>
          <li className='NavigationList'><a href='/aboute-me'>About</a></li>
          <li className='NavigationList'><a href='/my-blogs'>Blogs</a></li>
          <li className='NavigationList'><a href='/my-projects'>Projects</a></li>
          <li className='NavigationList'><a href='/my-resume'>Resume</a></li>
          <li className='NavigationList'><a href='/my-photo-gallery'>Photo Gallery</a></li>
          <li><button className='btn_Button' href='/'>Hire Me</button></li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
