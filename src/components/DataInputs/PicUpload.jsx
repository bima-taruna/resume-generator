import "../../styles/profile-pic.css";
function PicUpload({ profilePic, handlePicUpload }) {
  return (
    <div className="profile-pic">
      {profilePic && (
        <div className="pic">
          <img src={profilePic} alt="Profile" />
        </div>
      )}
      <div className="upload-container">
        <input type="file" accept="image/*" onChange={handlePicUpload} />
      </div>
    </div>
  );
}

export default PicUpload;
