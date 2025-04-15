import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
import Summary from "./Summary";
function DataInputs({ basicData, summaryData, onChange }) {
  return (
    <section className="data-inputs">
      <BasicForm basicData={basicData} onChange={onChange} />
      <Summary summaryData={summaryData} onChange={onChange} />
    </section>
  );
}

export default DataInputs;
