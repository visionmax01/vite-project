import React from 'react'
import Navbar from "../Components/NavbarMenu/Navbar"
import Footer from "../Components/footer/Footer";
import "./resume.css";
import AsidenavBar from '../Components/asideNavBar/AsidenavBar';
const resume = () => {
  return (
    <>
    <Navbar/>
    <div className="AbouteSectionMain">
      <AsidenavBar/>
    </div>
    </>
  )
}

export default resume