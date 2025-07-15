import { IoDownload } from "react-icons/io5";
import "../styles/navbar.css";
import PdfDownload from "./PDF/PdfDownload";
function Navbar({ showPDF }) {
  return (
    <nav>
      <h2>RESUME GENERATOR</h2>
      <div className="pdf-download">
        <IoDownload />
        {showPDF && <PdfDownload />}
      </div>
    </nav>
  );
}

export default Navbar;
