import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
import Modal from "./components/Modal";
import modalTypes from "./helper/modalTypes";
import ExperienceForm from "./components/Forms/ExperienceForm";
function App() {
  const [resumeData, setResumeData] = useState({
    basic: data.basic,
    summary: data.summary,
    experience: data.experience,
  });

  const [activeModal, setActiveModal] = useState(null);

  const handleChange = (e) => {
    const { name, value, id } = e.target;

    setResumeData((prev) => {
      switch (id) {
        case "summary":
          return {
            ...prev,
            summary: value,
          };

        default:
          return {
            ...prev,
            basic: {
              ...prev.basic,
              [name]: value,
            },
          };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setResumeData((prev) => {
      return {
        ...prev,
        experience: [...prev.experience, data],
      };
    });
  };

  return (
    <>
      <DataInputs
        basicData={resumeData.basic}
        summaryData={resumeData.summary}
        experienceData={resumeData.experience}
        onChange={handleChange}
        openModal={setActiveModal}
      />
      <Resume
        basicData={resumeData.basic}
        summary={resumeData.summary}
        experienceData={resumeData.experience}
      />
      <Modal
        headerText={"+ Create a new item"}
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
      >
        {activeModal === modalTypes.EXPERIENCE && (
          <ExperienceForm handleSubmit={handleSubmit} />
        )}
      </Modal>
    </>
  );
}

export default App;
