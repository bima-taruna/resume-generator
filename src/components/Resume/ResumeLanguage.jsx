import { useLanguageData } from "../../stores/useResumeStore";
import "../../styles/resumeLanguage.css";
function ResumeLanguage() {
  const languageData = useLanguageData();
  return (
    <section id="languages">
      <h3>Languages</h3>
      <hr />
      <ul className="language-list">{languageData.join(", ")}</ul>
    </section>
  );
}

export default ResumeLanguage;
