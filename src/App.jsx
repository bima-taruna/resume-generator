import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
import { useState } from "react";
import data from "./data/dummy-data";
function App() {
  const [basicData, setBasicData] = useState(data.basic);
  const handleBasicChange = (e) => {
    const { name, value } = e.target;

    setBasicData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <DataInputs basicData={basicData} onChange={handleBasicChange} />
      <Resume basicData={basicData} />
    </>
  );
}

export default App;
