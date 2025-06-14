function PicUpload({ profilePic, handlePicUpload }) {
  return (
    <div>
      <label>Profile Picture:</label>
      <input type="file" accept="image/*" onChange={handlePicUpload} />
      {profilePic && (
        <div style={{ marginTop: 10 }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: 150, borderRadius: "50%" }}
          />
        </div>
      )}
    </div>
  );
}

export default PicUpload;
