import { IoIosLink } from "react-icons/io";
import "../../styles/resume.css";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeHeader from "./ResumeHeader";
import ResumeProfiles from "./ResumeProfiles";
import ResumeSummary from "./ResumeSummary";
import ResumeProject from "./ResumeProject";
import ResumeSkills from "./ResumeSkills";
import ResumeCertificiation from "./ResumeCertification";
function Resume({
  basicData,
  summary,
  experienceData,
  profilesData,
  educationData,
  projectsData,
  skillData,
  certificationData,
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
      <ResumeCertificiation certificationData={certificationData} />
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
