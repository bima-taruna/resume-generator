import { FaRegNewspaper } from "react-icons/fa";
import TextArea from "../TextArea";
import { useResumeStore } from "../../stores/useResumeStore";

function Summary({ onChange }) {
  const { resumeData } = useResumeStore();
  const summaryData = resumeData.summary;
  return (
    <>
      <section id="summary">
        <header>
          <FaRegNewspaper />
          <h2>Summary</h2>
        </header>
        <TextArea name={"summary"} value={summaryData} onChange={onChange} />
      </section>
      <hr />
    </>
  );
}

export default Summary;
