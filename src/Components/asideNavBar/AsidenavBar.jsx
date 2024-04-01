import React, { useState } from "react";
import "./asidebar.css";
import { Link } from "react-router-dom";
import ContactInfo from "./contactInfo/ContactInfo";
import AbouteInfo  from "./AbouteInfo/AbouteInfo";
import Skillinfo from "./SkillsInfo/Skillinfo";
import Experiances from "./Experiances/Experiances";
import Academicinfo from "./Academicinfo/Academicinfo";
const AsidenavBar = () => {
    const [selectedContent, setSelectedContent] = useState("About");
   
    const handleItemClick = (content) => {
      setSelectedContent(content);
    };
  return (
    <div className="maincontainerResume">
      <aside className="sideNavBar">
        <div className="profileImage">
          <img src="../src/img/1684858746747.jpg" alt="" />
        </div>
        <div className="listItem">
          <ul>
            <li className={selectedContent === "About" ? "active" : ""}>
              <i className="fa-solid fa-address-card"></i>
              <Link className="listItemLink"  onClick={() => handleItemClick("About")}>
                About
              </Link>
              <div className="hoverdot1"></div>
              <div className="hoverTrangle"></div>
            </li>
            <li className={selectedContent === "Contact" ? "active" : ""}>
              <i className="fa-solid fa-id-card-clip"></i>
              <Link className="listItemLink"  onClick={() => handleItemClick("Contact")}>
                Contact
              </Link>
              <div className="hoverdot1"></div>
              <div className="hoverTrangle"></div>
            </li>
            <li className={selectedContent === "Academic" ? "active" : ""}>
              <i className="fa-solid fa-user-graduate"></i>
              <Link className="listItemLink" onClick={() => handleItemClick("Academic")}>
                Academic
              </Link>
              <div className="hoverdot1"></div>
              <div className="hoverTrangle"></div>
            </li>
            <li className={selectedContent === "Skill" ? "active" : ""}>
            <i className="fa-solid fa-person-skiing-nordic"></i>
              <Link className="listItemLink" onClick={() => handleItemClick("Skill")}>
                Skill
              </Link>
              <div className="hoverdot1"></div>
              <div className="hoverTrangle"></div>
            </li>
            <li className={selectedContent === "Experiences" ? "active" : ""}>
            <i className="fa-solid fa-star"></i>
              <Link className="listItemLink" onClick={() => handleItemClick("Experiences")}>
                Experiences
              </Link>
              <div className="hoverdot1"></div>
              <div className="hoverTrangle"></div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="displayContent">
        {selectedContent === "About" && (
          <div className="PageRendering">
           <AbouteInfo/>
          </div>
        )}
        {selectedContent === "Contact" && (
          <div className="PageRendering">
           <ContactInfo/>
          </div>
        )}
          {selectedContent === "Academic" && (
          <div className="PageRendering">
           <Academicinfo/>
          </div>
        )}
        {selectedContent === "Skill" && (
          <div className="PageRendering">
            <Skillinfo/>
          </div>
        )}
        {selectedContent === "Experiences" && (
          <div className="PageRendering">
            <Experiances/>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsidenavBar;
