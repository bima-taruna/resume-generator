import "../../styles/resumeCertification.css";
function ResumeCertificiation({ certificationData }) {
  if (!certificationData || certificationData.length < 1) {
    return null;
  }

  return (
    <section id="certifications">
      <h3>Certifications</h3>
      <hr />
      <ul className="cert-list">
        {certificationData?.map((certification, index) => (
          <li key={index}>
            <div className="cert-header">
              <h3 className="cert-name">{certification.name}</h3>
              <h3 className="cert-date">{certification.date}</h3>
            </div>
            <div className="cert-body">
              <div className="cert-issuer">{certification.issuer}</div>
              <span className="cert-link">
                <a href={certification.website}>{certification.website}</a>
              </span>
              <p>{certification.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResumeCertificiation;
