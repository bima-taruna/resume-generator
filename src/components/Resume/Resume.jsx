import { IoIosLink } from "react-icons/io";
import "../../styles/resume.css";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeHeader from "./ResumeHeader";
import ResumeProfiles from "./ResumeProfiles";
import ResumeSummary from "./ResumeSummary";
import ResumeProject from "./ResumeProject";
import ResumeSkills from "./ResumeSkills";
function Resume({
  basicData,
  summary,
  experienceData,
  profilesData,
  educationData,
  projectsData,
  skillData,
}) {
  return (
    <section className="resume-canvas">
      <ResumeHeader basicData={basicData} />
      <ResumeProfiles profilesData={profilesData} />
      <ResumeSummary summary={summary} />
      <ResumeExperience experienceData={experienceData} />
      <ResumeEducation educationData={educationData} />
      <ResumeProject projectsData={projectsData} />
      <ResumeSkills skillData={skillData} />
      <section id="certifications">
        <h3>Certifications</h3>
        <hr />
        <ul>
          <li>
            <div className="cert-header">
              <h3 className="cert-name">Bootcamp</h3>
              <h3 className="cert-date">August 2017 - January 2024</h3>
            </div>
            <div className="cert-body">
              <div className="cert-issuer">Dicoding</div>
              <span className="cert-link">
                <a href="http://">myyyy</a>
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section id="language">
        <h3>Language</h3>
        <hr />
        <ul>
          <li>English</li>
          <li>Indonesia</li>
          <li>Germany</li>
          <li>Japan</li>
        </ul>
      </section>
    </section>
  );
}

export default Resume;
