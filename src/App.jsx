import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
function App() {
  const [basicData, setBasicData] = useState(data.basic);
  const [summary, setSummary] = useState(data.summary);
  const [experience, setExperience] = useState(data.experience);
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (e.target.id) {
      case "summary":
        setSummary(e.target.value);
        break;

      default:
        setBasicData((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;
    }
  };

  return (
    <>
      <DataInputs
        basicData={basicData}
        summaryData={summary}
        experienceData={experience}
        onChange={handleChange}
      />
      <Resume basicData={basicData} summary={summary} />
    </>
  );
}

export default App;
