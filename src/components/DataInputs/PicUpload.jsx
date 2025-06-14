import "../../styles/profile-pic.css";
function PicUpload({ profilePic, handlePicUpload }) {
  return (
    <div className="profile-pic">
      <input type="file" accept="image/*" onChange={handlePicUpload} />
      {profilePic && (
        <div className="pic">
          <img src={profilePic} alt="Profile" />
        </div>
      )}
    </div>
  );
}

export default PicUpload;
