import "../../styles/resumeLanguage.css";
function ResumeLanguage({ languageData }) {
  return (
    <section id="languages">
      <h3>Languages</h3>
      <hr />
      <ul className="language-list">
        {languageData?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ResumeLanguage;
