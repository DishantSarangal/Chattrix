import { MessageSquare } from "lucide-react";
import "./NoChatSelected.css";

const NoChatSelected = () => {
  return (
    <div className="no-chat-container">
      <div className="content-wrapper">
        {/* Icon Display */}
        <div className="icon-display">
          <div className="icon-container">
            <div className="icon-background">
              <MessageSquare className="message-icon" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="welcome-heading">Welcome to Chatty!</h2>
        <p className="welcome-text">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;