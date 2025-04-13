import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
function DataInputs({ basicData, onChange }) {
  return (
    <section className="data-inputs">
      <BasicForm basicData={basicData} onChange={onChange} />
    </section>
  );
}

export default DataInputs;
