import { create } from "zustand";
import data from "../data/dummy-data";

export const useResumeStore = create((set) => ({
  resumeData: JSON.parse(localStorage.getItem("resumeData")) || data,
  profilePic: localStorage.getItem("profilePic") || null,
  setProfilePic: (base64) => {
    localStorage.setItem("profilePic", base64);
    set({ profilePic: base64 });
  },
  deleteProfilePic: () => {
    localStorage.removeItem("profilePic");
    set({ profilePic: null });
  },
  delayedDeleteProfilePic: (callback, delay = 50) => {
    setTimeout(() => {
      localStorage.removeItem("profilePic");
      set({ profilePic: null });
      if (callback) callback();
    }, delay);
  },
  setResumeData: (newData) => {
    localStorage.setItem("resumeData", JSON.stringify(newData));
    set({ resumeData: newData });
  },
  changeBasicData: (id, name, value) =>
    set((state) => {
      let updated;
      switch (id) {
        case "summary":
          updated = { ...state.resumeData, summary: value };
          break;
        default:
          updated = {
            ...state.resumeData,
            basic: { ...state.resumeData.basic, [name]: value },
          };
      }
      localStorage.setItem("resumeData", JSON.stringify(updated));
      return { resumeData: updated };
    }),
  addItem: (type, item) =>
    set((state) => {
      const updated = {
        ...state.resumeData,
        [type]: [...state.resumeData[type], item],
      };
      localStorage.setItem("resumeData", JSON.stringify(updated));
      return { resumeData: updated };
    }),
  updateItem: (type, index, item) =>
    set((state) => {
      const updatedArr = [...state.resumeData[type]];
      updatedArr[index] = item;
      const updated = { ...state.resumeData, [type]: updatedArr };
      localStorage.setItem("resumeData", JSON.stringify(updated));
      return { resumeData: updated };
    }),
  deleteItem: (type, index) =>
    set((state) => {
      const updatedArr = state.resumeData[type].filter((_, i) => i !== index);
      const updated = { ...state.resumeData, [type]: updatedArr };
      localStorage.setItem("resumeData", JSON.stringify(updated));
      return { resumeData: updated };
    }),
}));
