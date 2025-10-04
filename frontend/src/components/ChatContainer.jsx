import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import "./ChatContainer.css"; // Import the CSS file

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
      const unsubscribe = subscribeToMessages();
      return () => unsubscribe();
    }
  }, [selectedUser?._id, getMessages, subscribeToMessages]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="chat-container">
        <ChatHeader />
        <div className="messages-list-loading">
          <MessageSkeleton />
        </div>
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="chat-container">
      <ChatHeader />
      <div className="messages-list">
        {messages.map((message, index) => {
          const isSender = message.senderId === authUser._id;
          const isLastMessage = index === messages.length - 1;

          return (
            <div
              key={message._id}
              className={`message-row ${isSender ? "sent" : "received"}`}
              ref={isLastMessage ? messageEndRef : null}
            >
              <div className="message-avatar">
                <div className="avatar-image-wrapper">
                  <img
                    src={
                      isSender
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                    alt="Profile"
                    className="avatar-image"
                  />
                </div>
              </div>
              <div className="message-content">
                <div className="message-header">
                  <time className="message-time">
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>
                <div className="message-bubble">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="message-attachment-image"
                    />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;