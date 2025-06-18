import { IoDownload } from "react-icons/io5";
import "../styles/navbar.css";
import PdfDownload from "./PDF/PdfDownload";
function Navbar({ resumeData, profilePic }) {
  return (
    <nav>
      <h2>RESUME GENERATOR</h2>
      <div className="pdf-download">
        <IoDownload />
        <PdfDownload resumeData={resumeData} profilePic={profilePic} />
      </div>
    </nav>
  );
}

export default Navbar;
