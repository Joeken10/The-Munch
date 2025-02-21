import React, { useState } from "react";

function User() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="user-profile">
      <label htmlFor="file-upload" className="user-icon">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="profile-pic" />
        ) : (
          <i className="bi bi-person-circle"></i> // Default Bootstrap icon
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default User;
