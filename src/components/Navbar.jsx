import { IoDownload } from "react-icons/io5";
import "../styles/navbar.css";
import PdfDownload from "./PDF/PdfDownload";
import { useResumeStore } from "../stores/useResumeStore";
function Navbar({ showPDF }) {
  const { resumeData, profilePic } = useResumeStore();
  return (
    <nav>
      <h2>RESUME GENERATOR</h2>
      <div>
        {showPDF && (
          <PdfDownload resumeData={resumeData} profilePic={profilePic} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
