import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import "./ChatHeader.css"; // Import the CSS file

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="chat-header-container">
      <div className="chat-header-content">
        <div className="user-info">
          {/* Avatar */}
          <div className="user-avatar-wrapper">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={`${selectedUser.fullName}'s avatar`}
              className="user-avatar-image"
            />
          </div>

          {/* User Details */}
          <div className="user-details">
            <h3 className="user-name">{selectedUser.fullName}</h3>
            <p className={`user-status ${isOnline ? "online" : "offline"}`}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button className="close-chat-btn" onClick={() => setSelectedUser(null)}>
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;