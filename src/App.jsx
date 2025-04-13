import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./components/Resume/Resume";
import DataInputs from "./components/DataInputs/DataInputs";
function App() {
  return (
    <>
      <DataInputs />
      <Resume />
    </>
  );
}

export default App;
