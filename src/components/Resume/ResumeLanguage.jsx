import "../../styles/resumeLanguage.css";
function ResumeLanguage({ languageData }) {
  return (
    <section id="languages">
      <h3>Languages</h3>
      <hr />
      <ul className="language-list">{languageData.join(", ")}</ul>
    </section>
  );
}

export default ResumeLanguage;
