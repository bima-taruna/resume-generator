import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
import Modal from "./components/Modal";
import modalTypes from "./helper/modalTypes";
import ExperienceForm from "./components/Forms/ExperienceForm";
import ProfileForm from "./components/Forms/ProfileForm";
function App() {
  const [resumeData, setResumeData] = useState({
    basic: data.basic,
    summary: data.summary,
    experience: data.experience,
    profiles: data.profiles,
  });

  const [activeModal, setActiveModal] = useState(null);
  const [activeUpdateModal, setActiveUpdateModal] = useState(null);
  const [indexItem, setIndexItem] = useState(null);

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
    setActiveModal(null);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setResumeData((prev) => {
      const updatedExperience = [...prev.experience];
      updatedExperience[indexItem] = data;
      return {
        ...prev,
        experience: updatedExperience,
      };
    });
    setActiveUpdateModal(null);
  };

  const handleDelete = (index) => {
    setResumeData((prev) => {
      const updatedExperience = prev.experience.filter((_, i) => i !== index);
      return {
        ...prev,
        experience: updatedExperience,
      };
    });
    setActiveUpdateModal(null);
  };

  return (
    <>
      <DataInputs
        basicData={resumeData.basic}
        summaryData={resumeData.summary}
        profilesData={resumeData.profiles}
        experienceData={resumeData.experience}
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
      />
      <Modal
        headerText={"+ Create a new item"}
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
      >
        {activeModal === modalTypes.EXPERIENCE && (
          <ExperienceForm handleSubmit={handleSubmit} />
        )}
        {activeModal === modalTypes.PROFILE && (
          <ProfileForm handleSubmit={handleSubmit} />
        )}
      </Modal>
      <Modal
        headerText={"Update an existing item"}
        isOpen={activeUpdateModal !== null}
        onClose={() => setActiveUpdateModal(null)}
      >
        {activeUpdateModal === modalTypes.EXPERIENCE && (
          <ExperienceForm
            handleSubmit={handleUpdateSubmit}
            data={resumeData.experience[indexItem]}
            itemIndex={indexItem}
            handleDelete={handleDelete}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
