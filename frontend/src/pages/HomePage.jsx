import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="home-page-background">
      <div className="home-page-container">
        <div className="chat-app-window">
          <div className="chat-layout">
            <Sidebar />
            {/* Conditionally render either a welcome message or the chat interface */}
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;