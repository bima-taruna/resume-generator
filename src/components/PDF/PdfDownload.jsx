import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { IoDownloadOutline } from "react-icons/io5";
import ResumePDF from "./ResumePDF";

const PdfDownload = ({ resumeData, profilePic }) => {
  const [delayedData, setDelayedData] = useState(null);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    setShowLink(false);
    const timeout = setTimeout(() => {
      setDelayedData({
        resumeData: { ...resumeData },
        profilePic,
      });
      setShowLink(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [resumeData, profilePic]);

  if (!showLink || !delayedData) return null;

  return (
    <PDFDownloadLink
      style={{ color: "black", textDecoration: "none" }}
      document={
        <ResumePDF
          resumeData={delayedData.resumeData}
          profilePic={delayedData.profilePic}
        />
      }
      fileName="resume.pdf"
    >
      {({ loading }) =>
        loading ? (
          <div className="pdf-download">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="pdf-download">
            <IoDownloadOutline />
            <span>Download PDF</span>
          </div>
        )
      }
    </PDFDownloadLink>
  );
};

export default PdfDownload;
