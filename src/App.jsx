import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
import Modal from "./components/Modal";
import modalTypes from "./helper/modalTypes";
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

  return (
    <>
      <DataInputs
        basicData={resumeData.basic}
        summaryData={resumeData.summary}
        experienceData={resumeData.experience}
        onChange={handleChange}
        openModal={setActiveModal}
      />
      <Resume basicData={resumeData.basic} summary={resumeData.summary} />
      <Modal
        isOpen={activeModal === modalTypes.EXPERIENCE}
        onClose={() => setActiveModal(null)}
      >
        <h2>Hello from Modal 👋</h2>
        <p>This is a simple modal using React + CSS only.</p>
      </Modal>
    </>
  );
}

export default App;
