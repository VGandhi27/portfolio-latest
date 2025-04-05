"use client";
import { useState } from "react";
import experienceData from "../data/experience.json";
import "../app/style/experience.scss";
import { FaLink } from "react-icons/fa";

const ExperiencePage = () => {
  const [experiences] = useState(experienceData);

  return (
    <div className="timelineContainer" style={{ marginTop: "3rem" }}>
      <h1 className="title text-5xl">My Work Experience</h1>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            className={`timelineItem ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timelineDot"></div>
            <div className="experienceCard">
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experienceTopRightButton"
                >
                  <FaLink/>
                </a>
              )}

              <h3>{experience.role}</h3>
              <h4>{experience.company}</h4>
              <span className="duration">{experience.duration}</span>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
