import { useState } from "react";
// import data from "../data/dummy-data";
import { useEffect } from "react";
import { useResumeStore } from "../stores/useResumeStore";

const useResumeData = () => {
  const {
    resumeData,
    changeBasicData,
    addItem,
    updateItem,
    deleteItem,
    profilePic,
    setProfilePic,
    deleteProfilePic,
  } = useResumeStore();

  const [activeModal, setActiveModal] = useState(null);
  const [activeUpdateModal, setActiveUpdateModal] = useState(null);
  const [showPDF, setShowPDF] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeInput, setActiveInput] = useState(
    () => window.innerWidth < 1024
  );
  const [indexItem, setIndexItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    changeBasicData(id, name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    addItem(
      id.split("-")[0],
      id === "skills-form" || id === "languages-form" ? data.name : data
    );
    setActiveModal(null);
  };

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deletePic = () => {
    setShowPDF(false);
    setTimeout(() => {
      deleteProfilePic();
      setShowPDF(true);
    }, 50);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const id = e.target.id;
    updateItem(
      id.split("-")[0],
      indexItem,
      id === "skills-form" || id === "languages-form" ? data.name : data
    );
    setActiveUpdateModal(null);
  };

  const handleDelete = (type, index) => {
    deleteItem(type, index);
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
    isMobile,
  };
};

export default useResumeData;
