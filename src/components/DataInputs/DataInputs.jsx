import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
import Education from "./Education";
import Experience from "./Experience";
import Profiles from "./Profiles";
import Summary from "./Summary";
function DataInputs({
  basicData,
  summaryData,
  profilesData,
  experienceData,
  educationData,
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
      <Profiles
        profilesData={profilesData}
        openModal={openModal}
        openUpdateModal={openUpdateModal}
        setIndexItem={setIndexItem}
      />
      <hr />
      <Experience
        experienceData={experienceData}
        openModal={openModal}
        openUpdateModal={openUpdateModal}
        setIndexItem={setIndexItem}
      />
      <hr />
      <Education educationData={educationData} openModal={openModal} />
    </section>
  );
}

export default DataInputs;
