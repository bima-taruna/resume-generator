import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
import Education from "./Education";
import Experience from "./Experience";
import Profiles from "./Profiles";
import Projects from "./Projects";
import Summary from "./Summary";
function DataInputs({
  basicData,
  summaryData,
  profilesData,
  experienceData,
  educationData,
  projectsData,
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
      <Education
        educationData={educationData}
        openModal={openModal}
        openUpdateModal={openUpdateModal}
        setIndexItem={setIndexItem}
      />
      <hr />
      <Projects
        projectsData={projectsData}
        openModal={openModal}
        openUpdateModal={openUpdateModal}
        setIndexItem={setIndexItem}
      />
    </section>
  );
}

export default DataInputs;
