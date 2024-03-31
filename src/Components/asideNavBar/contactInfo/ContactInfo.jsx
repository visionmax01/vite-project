import React from "react";
import "./contactinfo.css";

const ContactInfo = () => {
  return (
    <div className="ContactInfoSection">
      <div className="containtContact">
        <div className="PersionalDetailsection">
          <h1>Persional Detail</h1>
          <div className="persionalInfo">
            <ul className="UnListDetail">
              <li>
                <p className="titleText">Name</p>{" "}
                <p className="listMiddel">:</p>{" "}
                <p className="listDetail">Bhishan Prasad sah</p>
              </li>
              <li>
                <p className="titleText">Phone No </p>
                <p className="listMiddel">:</p>{" "}
                <p className="listDetail">+91-9728161275</p>
              </li>
              <li>
                <p className="titleText">Email</p>{" "}
                <p className="listMiddel">:</p>{" "}
                <p className="listDetail">bhishansah@gmail.com</p>
              </li>
              <li>
                <p className="titleText">Date of Birth</p>{" "}
                <p className="listMiddel">:</p>{" "}
                <p className="listDetail">09/Jun/2022</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialMedia">
          <h1>Social Media contact</h1>
          <div className="socialIcon">
            <a href="">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
        <div className="WebsiteURL">
          <h1>Website URL</h1>
          <div className="WebsiteInfo">
            <a href="https://www.bhishansah.com.np"><i className="fa-solid fa-globe"></i><p>www.bhishansah.com.np</p></a>
          </div>
        </div>
      </div>
      {/* <div className="WebsiteURL"></div>

      <div className="OverViewSection"></div> */}
    </div>
  );
};

export default ContactInfo;
