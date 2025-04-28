import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/resumeProfiles.css";
function ResumeProfiles({ profilesData }) {
  return (
    <section id="profile">
      <h3>Profiles</h3>
      <hr />
      <ul className="profile-list">
        {profilesData &&
          profilesData.map((profile, index) => (
            <li key={index}>
              {profile.network === "github" ? <FaGithub /> : <FaLinkedin />}
              <a href={profile.website}>{profile.username}</a>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ResumeProfiles;
