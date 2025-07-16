import { useSkillData } from "../../stores/useResumeStore";
import "../../styles/resumeSkill.css";
function ResumeSkills() {
  const skillData = useSkillData();
  return (
    <section id="skills">
      <h3>Skills</h3>
      <hr />
      <ul className="skill-list">
        {skillData?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ResumeSkills;
