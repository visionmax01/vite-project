import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavbarMenu/Navbar";
import Footer from "../Components/footer/Footer";
import "./home.css";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  const [showAllExpertise, setShowAllExpertise] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesHome = [
    "../src/img/Bhishan_sah.jpg",
    "../src/img/1684858746747.jpg",
    "../src/img/1684858595814.jpg",
    "../src/img/Bhishan_sah.jpg",
    "../src/img/1684858746747.jpg",
  ];
  const images = [
    "../src/img/slideimage5.png",
    "../src/img/slideimage2.jpg",
    "../src/img/slideimage3.jpg",
    "../src/img/slideimage4.png",
    "../src/img/slideimage1.jpg",
  ];
  const expertiseData = [
    { name: "HTML", percentage: 100, image: "./src/img/html5.png" },
    { name: "CSS", percentage: 98, image: "./src/img/css.png" },
    { name: "React", percentage: 90, image: "./src/img/react.png" },
    { name: "JavaScript", percentage: 85, image: "./src/img/javascript.png" },
    { name: "Node Js", percentage: 75, image: "./src/img/nodeJs.png" },
    { name: "Php", percentage: 75, image: "./src/img/php.png" },
    { name: "Laravel", percentage: 80, image: "./src/img/laravel.png" },
    { name: "Express", percentage: 90, image: "./src/img/express.png" },
    // Add more expertise data as needed
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const toggleShowAllExpertise = () => {
    setShowAllExpertise((prev) => !prev);
  };
  return (
    <>
    
      <NavBar />
      <div className="homeSection_one">
        <div className="Secton-OneLeft">
          <div className="designOne"></div>
          <div className="designTwo"></div>
          <div className="homeIntro">
            <section
              id="hero"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div className="hero-container" data-aos="fade-in">
                <h1>Bhishan Prasad Sah</h1>
                <span className="Designation">Computer Engineer</span><br/>
                <h4>
                  <span className="textIM">I'm &nbsp;</span>
                  <div className="typingEffect">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "UI/UX Designer",
                          "Video Grapher",
                          "Designer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </h4>
              </div>
            </section>
            <p>
              I'm a web developer who is passionate about building beautiful and
              functional websites. I'm also passionate about learning new
              technologies and learning new ways of doing things.
            </p>
            <button className="btn_Button">Download CV</button>
          </div>
        </div>
        <div className="contactME">
          <i class="fa-solid fa-headset"></i>
        </div>
        <div className="Secton-OneRight">
          <div className="slideImage">
            {imagesHome.map((imageHome, index) => (
              <img
                key={index}
                src={imageHome}
                alt={`slide-${index}`}
                className={index === currentImageIndex ? "active" : "inactive"}
              />
            ))}
          </div>
         
        </div>
      </div>

      <div className="homeSection_two">
        <div className="rectangelDiv">
          <div className="sideDesign">
            <div className="sideDesign1"></div>
          </div>
        <div className="lineDiv">
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="smallCircle">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
        </div>
          
          <div className="circleDiv">
            <img src="../src/img/1684858746747.jpg" alt="" />
          </div>
        </div>

        

        <div className={`skillsSection ${showAllExpertise ? "showAll" : ""}`}>
          <h2>My Expertise</h2>
          <hr className="underLine" />
          <div className="ExpertiesList">
            {showAllExpertise
              ? expertiseData.map((expertise, index) => (
                  <div className="card-One" key={index}>
                    <div className="cardLogo">
                      <img src={expertise.image} alt="" />
                    </div>
                    <div className="containtInfo">
                      <p>{expertise.name}</p>
                      <span>{expertise.percentage}%</span>
                    </div>
                  </div>
                ))
              : expertiseData.slice(0, 4).map((expertise, index) => (
                  <div className="card-One" key={index}>
                    <div className="cardLogo">
                      <img src={expertise.image} alt="" />
                    </div>
                    <div className="containtInfo">
                      <p>{expertise.name}</p>
                      <span>{expertise.percentage}%</span>
                    </div>
                  </div>
                ))}
          </div>
          <div className="buttonContainer">
            <button className="btn_Button" onClick={toggleShowAllExpertise}>
              {showAllExpertise ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
      <div className="homeSection-Three">
        <div className="containtTop">
          <div className="nextLeft" onClick={handlePrevious}>
            <i class="fa-solid fa-caret-left"></i>
          </div>
          <div className="slideImage">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`slide-${index}`}
                className={index === currentImageIndex ? "active" : "inactive"}
              />
            ))}
          </div>
          <div className="dots-container">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <div className="nextRight" onClick={handleNext}>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
