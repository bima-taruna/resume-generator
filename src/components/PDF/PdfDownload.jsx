import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

const PdfDownload = ({ resumeData, profilePic }) => (
  <div>
    <PDFDownloadLink
      style={{ color: "black", textDecoration: "none" }}
      document={<ResumePDF {...resumeData} profilePic={profilePic} />}
      fileName="resume.pdf"
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  </div>
);

export default PdfDownload;
