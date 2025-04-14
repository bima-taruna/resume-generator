import "../../styles/resumeHeader.css";
function ResumeHeader({ basicData }) {
  return (
    <header className="resume-header">
      <h1 className="full-name">{basicData.fullName}</h1>
      <h2 className="headline">{basicData.headline}</h2>
      <ul>
        {basicData.location && (
          <li className="location">{basicData.location}</li>
        )}
        {basicData.phoneNumber && (
          <li className="phone-number">| {basicData.phoneNumber}</li>
        )}
        {basicData.email && <li className="email">| {basicData.email}</li>}
        {basicData.website && (
          <li className="website">| {basicData.website}</li>
        )}
      </ul>
    </header>
  );
}

export default ResumeHeader;
