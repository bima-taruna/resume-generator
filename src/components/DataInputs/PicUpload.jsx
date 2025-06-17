import "../../styles/profile-pic.css";
function PicUpload({ profilePic, handlePicUpload }) {
  return (
    <div className="profile-pic">
      <label htmlFor="picture">Picture </label>
      <div className="pic-input">
        {profilePic && (
          <div className="pic">
            <img src={profilePic} alt="Profile" />
          </div>
        )}
        <div className="upload-container">
          <input
            id="picture"
            type="file"
            accept="image/*"
            onChange={handlePicUpload}
          />
        </div>
      </div>
    </div>
  );
}

export default PicUpload;
