import { useState } from "react";
import data from "../data/dummy-data";
import { useEffect } from "react";

const useResumeData = () => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) return JSON.parse(saved);
    return {
      basic: data.basic,
      summary: data.summary,
      experience: data.experience,
      profiles: data.profiles,
      education: data.education,
      projects: data.projects,
      skills: data.skills,
      certifications: data.certifications,
      languages: data.languages,
    };
  });
  const [profilePic, setProfilePic] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [activeUpdateModal, setActiveUpdateModal] = useState(null);
  const [showPDF, setShowPDF] = useState(true);
  const [activeInput, setActiveInput] = useState(
    () => window.innerWidth < 1024
  );
  const [indexItem, setIndexItem] = useState(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    const savedResumeData = localStorage.getItem("resumeData");
    if (savedPic) setProfilePic(savedPic);
    if (savedResumeData) setResumeData(JSON.parse(savedResumeData));
  }, []);

  useEffect(() => {
    if (resumeData) {
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
    }
  }, [resumeData]);
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
      [id.split("-")[0]]: [
        ...prev[id.split("-")[0]],
        id === "skills-form" || id === "languages-form" ? data.name : data,
      ],
    }));

    setActiveModal(null);
  };

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      localStorage.setItem("profilePic", base64);
      setProfilePic(base64);
    };
    reader.readAsDataURL(file);
  };

  const deletePic = () => {
    setShowPDF(false);
    setProfilePic(null);
    localStorage.removeItem("profilePic");
    setTimeout(() => setShowPDF(true), 1);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const id = e.target.id;
    setResumeData((prev) => {
      const updatedData = [...prev[id.split("-")[0]]];
      updatedData[indexItem] =
        id === "skills-form" || id === "languages-form" ? data.name : data;
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
    setActiveInput,
    activeInput,
    indexItem,
    setIndexItem,
    handleChange,
    handleSubmit,
    handleUpdateSubmit,
    handleDelete,
    profilePic,
    handlePicUpload,
    deletePic,
    showPDF,
  };
};

export default useResumeData;
