import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
import Experience from "./Experience";
import Profiles from "./Profiles";
import Summary from "./Summary";
function DataInputs({
  basicData,
  summaryData,
  profilesData,
  experienceData,
  onChange,
  openModal,
  openUpdateModal,
  setIndexItem,
}) {
  return (
    <section className="data-inputs">
      <BasicForm basicData={basicData} onChange={onChange} />
      <hr />
      <Summary summaryData={summaryData} onChange={onChange} />
      <hr />
      <Profiles profilesData={profilesData} />
      <hr />
      <Experience
        experienceData={experienceData}
        openModal={openModal}
        openUpdateModal={openUpdateModal}
        setIndexItem={setIndexItem}
      />
    </section>
  );
}

export default DataInputs;
