import { useRef } from "react";
import "../../styles/profile-pic.css";
function PicUpload({ profilePic, handlePicUpload, deletePicture }) {
  const fileInputRef = useRef(null);
  const handleDeletePic = () => {
    deletePicture();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
            ref={fileInputRef}
          />
        </div>
        <button onClick={handleDeletePic} className="delete-pic">
          x
        </button>
      </div>
    </div>
  );
}

export default PicUpload;
