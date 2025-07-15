import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";
import { useResumeStore } from "../../stores/useResumeStore";

const PdfDownload = () => {
  const { resumeData, profilePic } = useResumeStore();
  return (
    <div>
      <PDFDownloadLink
        style={{ color: "black", textDecoration: "none" }}
        document={<ResumePDF resumeData={resumeData} profilePic={profilePic} />}
        fileName="resume.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default PdfDownload;
