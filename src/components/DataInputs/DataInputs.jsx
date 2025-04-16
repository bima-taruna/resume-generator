import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
import Experience from "./Experience";
import Summary from "./Summary";
function DataInputs({ basicData, summaryData, experienceData, onChange }) {
  return (
    <section className="data-inputs">
      <BasicForm basicData={basicData} onChange={onChange} />
      <Summary summaryData={summaryData} onChange={onChange} />
      <Experience experienceData={experienceData} />
    </section>
  );
}

export default DataInputs;
