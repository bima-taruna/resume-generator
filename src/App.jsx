import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import CustomModal from "./components/CustomModal";
import useResumeData from "./hooks/useResumeData";
import Navbar from "./components/Navbar";
function App() {
  const {
    resumeData,
    activeModal,
    setActiveModal,
    activeUpdateModal,
    setActiveUpdateModal,
    indexItem,
    setIndexItem,
    handleChange,
    handleSubmit,
    handleUpdateSubmit,
    handleDelete,
  } = useResumeData();

  return (
    <>
      <Navbar resumeData={resumeData} />
      <DataInputs
        basicData={resumeData.basic}
        summaryData={resumeData.summary}
        profilesData={resumeData.profiles}
        experienceData={resumeData.experience}
        educationData={resumeData.education}
        projectsData={resumeData.projects}
        skillData={resumeData.skills}
        certificationData={resumeData.certifications}
        languageData={resumeData.languages}
        onChange={handleChange}
        openModal={setActiveModal}
        openUpdateModal={setActiveUpdateModal}
        setIndexItem={setIndexItem}
      />
      <Resume
        basicData={resumeData.basic}
        summary={resumeData.summary}
        experienceData={resumeData.experience}
        profilesData={resumeData.profiles}
        educationData={resumeData.education}
        projectsData={resumeData.projects}
        skillData={resumeData.skills}
        certificationData={resumeData.certifications}
        languageData={resumeData.languages}
      />
      <CustomModal
        type={activeModal}
        modalType={"CREATE"}
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        handleSubmit={handleSubmit}
      />
      <CustomModal
        type={activeUpdateModal}
        modalType={"UPDATE"}
        isOpen={activeUpdateModal !== null}
        onClose={() => setActiveUpdateModal(null)}
        handleSubmit={handleUpdateSubmit}
        data={
          activeUpdateModal && indexItem !== null
            ? resumeData[activeUpdateModal?.toLowerCase()][indexItem]
            : null
        }
        itemIndex={indexItem}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
