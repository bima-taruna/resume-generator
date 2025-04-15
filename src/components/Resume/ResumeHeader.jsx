import { GrLink, GrLocation, GrPhone } from "react-icons/gr";
import "../../styles/resumeHeader.css";
import { MdAlternateEmail } from "react-icons/md";
function ResumeHeader({ basicData }) {
  return (
    <header id="resume-header">
      <div className="user-pic"></div>
      <div className="basic-data">
        <h1 className="full-name">{basicData.fullName}</h1>
        <h2 className="headline">{basicData.headline}</h2>
        <ul>
          {basicData.location && (
            <li className="location">
              <GrLocation />
              {basicData.location}
            </li>
          )}
          {basicData.phoneNumber && (
            <li className="phone-number">
              | <GrPhone /> {basicData.phoneNumber}
            </li>
          )}
          {basicData.email && (
            <li className="email">
              | <MdAlternateEmail /> {basicData.email}
            </li>
          )}
          {basicData.website && (
            <li className="website">
              | <GrLink /> {basicData.website}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default ResumeHeader;
