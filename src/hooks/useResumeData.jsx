import { useState } from "react";
import data from "../data/dummy-data";

const useResumeData = () => {
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
    setResumeData((prev) => ({
      ...prev,
      [id.split("-")[0]]: [...prev[id.split("-")[0]], data],
    }));
    setActiveModal(null);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const id = e.target.id;
    setResumeData((prev) => {
      const updatedData = [...prev[id.split("-")[0]]];
      updatedData[indexItem] = data;
      return { ...prev, [id.split("-")[0]]: updatedData };
    });
    setActiveUpdateModal(null);
  };

  const handleDelete = (type, index) => {
    setResumeData((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
    setActiveUpdateModal(null);
  };

  return {
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
  };
};

export default useResumeData;
