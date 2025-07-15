import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/resumeProfiles.css";
import { useResumeStore } from "../../stores/useResumeStore";
function ResumeProfiles() {
  const { resumeData } = useResumeStore();
  const profilesData = resumeData.profiles;
  if (!profilesData || profilesData.length < 1) {
    return null;
  }
  return (
    <section id="profile">
      <h3>Profiles</h3>
      <hr />
      <ul className="profile-list">
        {profilesData?.map((profile, index) => (
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
