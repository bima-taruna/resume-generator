import "../styles/navbar.css";
import PdfDownload from "./PDF/PdfDownload";
function Navbar({ resumeData }) {
  return (
    <nav>
      <h2>RESUME GENERATOR</h2>
      <div>
        <PdfDownload resumeData={resumeData} />
      </div>
    </nav>
  );
}

export default Navbar;
