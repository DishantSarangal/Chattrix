import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";
import "./ProfilePage.css"; // Import the CSS file

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="profile-page-container">
      <div className="profile-content-wrapper">
        <div className="profile-card">
          <div className="profile-header">
            <h1 className="profile-title">Profile</h1>
            <p className="profile-subtitle">Your profile information</p>
          </div>

          {/* Avatar Upload Section */}
          <div className="avatar-upload-section">
            <div className="avatar-image-container">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="avatar-image"
              />
              <label
                htmlFor="avatar-upload"
                className={`avatar-upload-label ${isUpdatingProfile ? "is-updating" : ""}`}
              >
                <Camera className="upload-icon" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden-file-input"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="upload-status-text">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* User Info Section */}
          <div className="user-info-section">
            <div className="info-block">
              <div className="info-label">
                <User className="info-icon" />
                <span>Full Name</span>
              </div>
              <p className="info-value">{authUser?.fullName}</p>
            </div>

            <div className="info-block">
              <div className="info-label">
                <Mail className="info-icon" />
                <span>Email Address</span>
              </div>
              <p className="info-value">{authUser?.email}</p>
            </div>
          </div>

          {/* Account Details Card */}
          <div className="account-details-card">
            <h2 className="account-details-title">Account Information</h2>
            <div className="account-details-list">
              <div className="detail-item with-border">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="detail-item">
                <span>Account Status</span>
                <span className="account-status-active">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;