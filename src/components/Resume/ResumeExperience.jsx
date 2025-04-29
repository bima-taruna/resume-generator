import "../../styles/resumeExperience.css";
import React from "react";
function ResumeExperience({ experienceData }) {
  return (
    <section id="experience">
      <h3>Experience</h3>
      <hr />
      <ul className="exp-list">
        {experienceData &&
          experienceData.map((experience, index) => (
            <li key={index}>
              <div className="exp-header">
                <h3 className="exp-company">{experience.company}</h3>
                <h3 className="exp-date">{experience.date}</h3>
              </div>
              <div className="exp-detail">
                <h4 className="exp-position">{experience.position}</h4>
                <h4 className="exp-location">{experience.location}</h4>
              </div>
              <div className="exp-website">{experience.website}</div>
              <p className="exp-desc">
                {experience.summary.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ResumeExperience;
