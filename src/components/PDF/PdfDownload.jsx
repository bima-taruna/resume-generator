import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

const PdfDownload = ({ resumeData }) => (
  <div>
    <PDFDownloadLink
      style={{ color: "black", textDecoration: "none" }}
      document={<ResumePDF {...resumeData} />}
      fileName="resume.pdf"
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  </div>
);

export default PdfDownload;
