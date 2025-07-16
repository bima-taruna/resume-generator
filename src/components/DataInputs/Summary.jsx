import { FaRegNewspaper } from "react-icons/fa";
import TextArea from "../TextArea";
import { useSummaryData } from "../../stores/useResumeStore";

function Summary({ onChange }) {
  const summaryData = useSummaryData();
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
