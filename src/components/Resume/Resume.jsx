import "../../styles/resume.css";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeHeader from "./ResumeHeader";
import ResumeProfiles from "./ResumeProfiles";
import ResumeSummary from "./ResumeSummary";
function Resume({
  basicData,
  summary,
  experienceData,
  profilesData,
  educationData,
}) {
  return (
    <section className="resume-canvas">
      <ResumeHeader basicData={basicData} />
      <ResumeProfiles profilesData={profilesData} />
      <ResumeSummary summary={summary} />
      <ResumeExperience experienceData={experienceData} />
      <ResumeEducation educationData={educationData} />
      <section id="projects">
        <h3>Projects </h3>
        <hr />
        <ul className="project-list">
          <li>
            <div className="project-header">
              <h3 className="project-name">My Project</h3>
              <h3 className="project-date">August 2017 - January 2024</h3>
            </div>
            <div className="project-link">
              <a href="http://">myyyy</a>
            </div>
            <div className="project-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              tempora, itaque, inventore sint, architecto excepturi aliquam eius
              assumenda quos harum cumque autem. Veniam, laboriosam quisquam! Id
              a fugiat repudiandae placeat?
            </div>
          </li>
        </ul>
      </section>
      <section id="skills">
        <h3>Skills</h3>
        <hr />
        <ul>
          <li>HTML</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>PHP</li>
        </ul>
      </section>
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
