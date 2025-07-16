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
function Resume() {
  return (
    <section className="resume-canvas">
      <ResumeHeader />
      <ResumeProfiles />
      <ResumeSummary />
      <ResumeExperience />
      <ResumeEducation />
      <ResumeProject />
      <ResumeSkills />
      <ResumeCertificiation />
      <ResumeLanguage />
    </section>
  );
}

export default Resume;
