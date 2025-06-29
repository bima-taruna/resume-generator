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
import ResumeLanguage from "./ResumeLanguage";
function Resume({
  basicData,
  summary,
  experienceData,
  profilesData,
  educationData,
  projectsData,
  skillData,
  certificationData,
  languageData,
  profilePic,
}) {
  return (
    <section className="resume-canvas">
      <ResumeHeader basicData={basicData} profilePic={profilePic} />
      <ResumeProfiles profilesData={profilesData} />
      <ResumeSummary summary={summary} />
      <ResumeExperience experienceData={experienceData} />
      <ResumeEducation educationData={educationData} />
      <ResumeProject projectsData={projectsData} />
      <ResumeSkills skillData={skillData} />
      <ResumeCertificiation certificationData={certificationData} />
      <ResumeLanguage languageData={languageData} />
    </section>
  );
}

export default Resume;
