import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";
import "./SettingsPage.css"; // Import the CSS file

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="section-header">
          <h2 className="section-title">Theme</h2>
          <p className="section-description">Choose a theme for your chat interface</p>
        </div>

        <div className="theme-grid">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`theme-button ${theme === t ? "active" : ""}`}
              onClick={() => setTheme(t)}
            >
              <div className="theme-swatch" data-theme={t}>
                <div className="theme-swatch-colors">
                  <div className="swatch-color bg-primary"></div>
                  <div className="swatch-color bg-secondary"></div>
                  <div className="swatch-color bg-accent"></div>
                  <div className="swatch-color bg-neutral"></div>
                </div>
              </div>
              <span className="theme-name">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="section-title">Preview</h3>
        <div className="preview-container">
          <div className="preview-background">
            <div className="preview-wrapper">
              {/* Mock Chat UI */}
              <div className="mock-chat">
                {/* Chat Header */}
                <div className="mock-chat-header">
                  <div className="user-info">
                    <div className="user-avatar">J</div>
                    <div>
                      <h3 className="user-name">John Doe</h3>
                      <p className="user-status">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="messages-area">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`message-row ${message.isSent ? "sent" : "received"}`}
                    >
                      <div
                        className={`message-bubble ${message.isSent ? "sent-bubble" : "received-bubble"
                          }`}
                      >
                        <p className="message-text">{message.content}</p>
                        <p
                          className={`message-timestamp ${message.isSent ? "sent-time" : "received-time"
                            }`}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="mock-chat-input-area">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="message-input"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="send-button">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;