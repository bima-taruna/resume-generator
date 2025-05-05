import "../../styles/resumeEducation.css";
function ResumeEducation({ educationData }) {
  if (!educationData || educationData.length < 1) {
    return null;
  }
  return (
    <section id="education">
      <h3>Education</h3>
      <hr />
      <ul className="edu-list">
        {educationData?.map((item, index) => (
          <li key={index}>
            <div className="edu-header">
              <h3 className="edu-institution">{item.institution}</h3>
              <h3 className="edu-date">{item.date}</h3>
            </div>
            <div className="edu-detail">
              <h4 className="edu-study">{item.study}</h4>
              <h4 className="edu-type">{item.type}</h4>
            </div>
            <h4 className="edu-score">{item.score}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResumeEducation;
