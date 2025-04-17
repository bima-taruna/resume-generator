import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
function App() {
  const [resumeData, setResumeData] = useState({
    basic: data.basic,
    summary: data.summary,
    experience: data.experience,
  });

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
      />
      <Resume basicData={resumeData.basic} summary={resumeData.summary} />
    </>
  );
}

export default App;
