import { GrLink, GrLocation, GrPhone } from "react-icons/gr";
import "../../styles/resumeHeader.css";
import { MdAlternateEmail } from "react-icons/md";
import { useBasicData, useProfilePic } from "../../stores/useResumeStore";
function ResumeHeader() {
  const basicData = useBasicData();
  const profilePic = useProfilePic();
  return (
    <header id="resume-header">
      {profilePic && (
        <div className="user-pic">
          <img
            src={profilePic}
            alt="profile picture"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
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
              | <GrLink /> <a href={basicData.website}>Website</a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default ResumeHeader;
