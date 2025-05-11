import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
import Modal from "./components/Modal";
import modalTypes from "./helper/modalTypes";
import ExperienceForm from "./components/Forms/ExperienceForm";
import ProfileForm from "./components/Forms/ProfileForm";
import EducationForm from "./components/Forms/EducationForm";
import ProjectForm from "./components/Forms/ProjectForm";
function App() {
  const [resumeData, setResumeData] = useState({
    basic: data.basic,
    summary: data.summary,
    experience: data.experience,
    profiles: data.profiles,
    education: data.education,
    projects: data.projects,
    skills: data.skills,
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
    const id = e.target.id;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    switch (id) {
      case "experience-form":
        setResumeData((prev) => {
          return {
            ...prev,
            experience: [...prev.experience, data],
          };
        });
        break;
      case "education-form":
        setResumeData((prev) => {
          return {
            ...prev,
            education: [...prev.education, data],
          };
        });
        break;
      case "project-form":
        setResumeData((prev) => {
          return {
            ...prev,
            projects: [...prev.projects, data],
          };
        });
        break;
      default:
        setResumeData((prev) => {
          return {
            ...prev,
            profiles: [...prev.profiles, data],
          };
        });
        break;
    }
    setActiveModal(null);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const id = e.target.id;
    switch (id) {
      case "education-form":
        setResumeData((prev) => {
          const updatedEducation = [...prev.education];
          updatedEducation[indexItem] = data;
          return {
            ...prev,
            education: updatedEducation,
          };
        });
        break;
      case "profile-form":
        setResumeData((prev) => {
          const updatedProfile = [...prev.profiles];
          updatedProfile[indexItem] = data;
          return {
            ...prev,
            profiles: updatedProfile,
          };
        });
        break;
      case "project-form":
        setResumeData((prev) => {
          const updatedProject = [...prev.projects];
          updatedProject[indexItem] = data;
          return {
            ...prev,
            projects: updatedProject,
          };
        });
        break;
      default:
        setResumeData((prev) => {
          const updatedExperience = [...prev.experience];
          updatedExperience[indexItem] = data;
          return {
            ...prev,
            experience: updatedExperience,
          };
        });
        break;
    }
    setActiveUpdateModal(null);
  };

  const handleDelete = (type, index) => {
    switch (type) {
      case "experience":
        setResumeData((prev) => {
          const updatedExperience = prev.experience.filter(
            (_, i) => i !== index
          );
          return {
            ...prev,
            experience: updatedExperience,
          };
        });

        break;
      case "education":
        setResumeData((prev) => {
          const updatedEducation = prev.education.filter((_, i) => i !== index);
          return {
            ...prev,
            education: updatedEducation,
          };
        });
        break;
      case "project":
        setResumeData((prev) => {
          const updatedProject = prev.projects.filter((_, i) => i !== index);
          return {
            ...prev,
            projects: updatedProject,
          };
        });
        break;
      default:
        setResumeData((prev) => {
          const updatedProfile = prev.profiles.filter((_, i) => i !== index);
          return {
            ...prev,
            profiles: updatedProfile,
          };
        });
        break;
    }
    setActiveUpdateModal(null);
  };

  return (
    <>
      <DataInputs
        basicData={resumeData.basic}
        summaryData={resumeData.summary}
        profilesData={resumeData.profiles}
        experienceData={resumeData.experience}
        educationData={resumeData.education}
        projectsData={resumeData.projects}
        skillData={resumeData.skills}
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
        {activeModal === modalTypes.EDUCATION && (
          <EducationForm handleSubmit={handleSubmit} />
        )}
        {activeModal === modalTypes.PROJECT && (
          <ProjectForm handleSubmit={handleSubmit} />
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
        {activeUpdateModal === modalTypes.PROFILE && (
          <ProfileForm
            handleSubmit={handleUpdateSubmit}
            data={resumeData.profiles[indexItem]}
            itemIndex={indexItem}
            handleDelete={handleDelete}
          />
        )}
        {activeUpdateModal === modalTypes.EDUCATION && (
          <EducationForm
            handleSubmit={handleUpdateSubmit}
            data={resumeData.education[indexItem]}
            itemIndex={indexItem}
            handleDelete={handleDelete}
          />
        )}
        {activeUpdateModal === modalTypes.PROJECT && (
          <ProjectForm
            handleSubmit={handleUpdateSubmit}
            data={resumeData.projects[indexItem]}
            itemIndex={indexItem}
            handleDelete={handleDelete}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
