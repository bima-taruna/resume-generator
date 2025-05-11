import { IoIosLink } from "react-icons/io";
import "../../styles/resumeProject.css";
function ResumeProject({ projectsData }) {
  if (!projectsData || projectsData.length < 1) {
    return null;
  }
  return (
    <section id="projects">
      <h3>Projects</h3>
      <hr />
      <ul className="project-list">
        {projectsData?.map((item, index) => (
          <li key={index}>
            <div className="project-header">
              <h3 className="project-name">{item.name}</h3>
              <h3 className="project-date">{item.date}</h3>
            </div>
            <div className="project-desc">{item.description}</div>
            {item.website && (
              <div className="project-link">
                <IoIosLink />
                <a href={item.website}>{item.website}</a>
              </div>
            )}
            <div className="project-summary">{item.summary}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResumeProject;
