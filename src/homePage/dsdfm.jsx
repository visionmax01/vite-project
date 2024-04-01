import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavbarMenu/Navbar";
import Footer from "../Components/footer/Footer";
import "./home.css";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllExpertise, setShowAllExpertise] = useState(false); // State variable to toggle showing all expertise cards
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

  const toggleShowAllExpertise = () => {
    setShowAllExpertise((prev) => !prev);
  };

  return (
    <>
      <NavBar />
      {/* Your existing code */}
      <div className="skillsSection">
        <h2>My Expertise</h2>
        <hr className="underLine" />
        <div className="ExpertiesList">
          {/* Conditionally render expertise cards based on showAllExpertise state */}
          {showAllExpertise ? (
            /* Render all expertise cards */
            expertiseData.map((expertise, index) => (
              <div className="card-One" key={index}>
                {/* Expertise card content */}
              </div>
            ))
          ) : (
            /* Render only one row of expertise cards */
            expertiseData.slice(0, 4).map((expertise, index) => (
              <div className="card-One" key={index}>
                {/* Expertise card content */}
              </div>
            ))
          )}
        </div>
        {/* Button to toggle showing all expertise cards */}
        <button onClick={toggleShowAllExpertise}>
          {showAllExpertise ? "Show Less" : "Show More"}
        </button>
      </div>
      {/* Your existing code */}
      <Footer />
    </>
  );
};

export default Homepage;
