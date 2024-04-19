import React from "react";
import "./skills.css";

const Skillinfo = () => {
  // Define skills with their percentages
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    // Add more skills as needed
  ];

  // Function to calculate color based on percentage
  const getColor = (percentage) => {
    if (percentage >= 80) {
      return "green";
    } else if (percentage >= 70) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="ContactInfoSection">
      <div className="PersionalDetailsection technicalDetail">
        <h1>Technical skills</h1>
        <p>
          As a designer and website developer, I possess a unique blend of
          skills that allows me to create visually appealing and functional
          websites. My design skills include an eye for aesthetics, an
          understanding of color theory, typography, and layout, and proficiency
          in software such as Photoshop, Illustrator, and InDesign. My web
          development skills include knowledge of HTML, CSS.
        </p>
        <div className="skillDesingnSection">
          {skills.map((skill, index) => (
            <div className="partitationSkill" key={index}>
              <div className="singleSkill">
                <div className="skillLabel">
                  <p>{skill.name}</p>
                  <p>{skill.percentage}%</p>
                </div>
                <div className="snakeBarIndecater">
                  <div
                    className="fill"
                    style={{ width: `${skill.percentage}%`, backgroundColor: getColor(skill.percentage) }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillinfo;
