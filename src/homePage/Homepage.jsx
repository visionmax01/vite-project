import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavbarMenu/Navbar";
import Footer from "../Components/footer/Footer";
import "./home.css";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "../src/img/slideimage5.png",
    "../src/img/slideimage2.jpg",
    "../src/img/slideimage3.jpg",
    "../src/img/slideimage4.png",
    "../src/img/slideimage1.jpg",
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
          <img src="../src/img/Bhishan_sah.jpg" alt="" />
        </div>
      </div>

      <div className="homeSection_two">
        
        <div className="sideDesign"></div>
        <div className="desingContainer">
          <div className="childCircle"></div>
          <div className="childCircle"></div>
          <div className="childCircle"></div>
          <div className="childCircle"></div>
        </div>
        <div className="childCircleBottom"></div>
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
        <div className="skillsSection">
          <h2>My Expertise</h2>
          <hr className="underLine" />
          <div className="ExpertiesList">
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/html5.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/css.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/react.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/javascript.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <p>EX</p>
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/nodeJs.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/php.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/laravel.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>Laravel</p>
                <span>80%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/laravel.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
            <div class="card-One">
              <div className="cardLogo">
                <img src="../src/img/laravel.png" alt="" />
              </div>
              <div className="containtInfo">
                <p>HTML</p>
                <span>90%</span>
              </div>
            </div>
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
