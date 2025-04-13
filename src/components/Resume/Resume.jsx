import "../../styles/resume.css";
import ResumeHeader from "./ResumeHeader";
function Resume() {
  return (
    <section className="resume-canvas">
      <ResumeHeader />
      <hr />
      <section className="profile">
        <h3>Profiles</h3>
        <a href="http://">example.com</a>
        <a href="http://">example.com</a>
      </section>
      <hr />
      <section className="summary">
        <h3>Summary</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        veritatis numquam iure ad magni tenetur explicabo, voluptates illum
        tempora possimus atque, illo eius neque, nesciunt mollitia qui quia nemo
        eos.
      </section>
      <hr />
      <section className="experience">
        <h3>Experience</h3>
        <ul className="exp-list">
          <li>
            <div className="exp-header">
              <h3 className="exp-company">PT mencari cinta sejati</h3>
              <h3 className="exp-date">August 2017 - January 2024</h3>
            </div>
            <div className="exp-detail">
              <h4 className="exp-position">Fullstack Dev</h4>
              <h4 className="location">Medan</h4>
            </div>
            <div className="exp-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              tempora, itaque, inventore sint, architecto excepturi aliquam eius
              assumenda quos harum cumque autem. Veniam, laboriosam quisquam! Id
              a fugiat repudiandae placeat?
            </div>
          </li>
        </ul>
      </section>
      <hr />
      <section className="education">
        <h3>Education</h3>
        <ul className="edu-list">
          <li>
            <div className="edu-header">
              <h3 className="edu-name">STMIK</h3>
              <h3 className="edu-date">August 2017 - January 2024</h3>
            </div>
            <div className="edu-detail">
              <h4 className="edu-study">Information System</h4>
              <h4 className="edu-level">Bachelor Degree</h4>
            </div>
            <h4 className="edu-score">3.82</h4>
          </li>
        </ul>
      </section>
      <hr />
      <section className="projects">
        <h3>Projects </h3>
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
      <hr />
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>PHP</li>
        </ul>
      </section>
      <hr />
      <section className="certifications">
        <h3>Certifications</h3>
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
      <hr />
      <section className="language">
        <h3>Language</h3>
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
