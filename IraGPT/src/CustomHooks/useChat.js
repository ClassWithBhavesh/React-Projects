import { useState } from "react";
import { fetchGeminiResponse } from "../Services/fetch";

export const useChat = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [loading, setLoading] = useState(false);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: []
    };
    setChats([newChat, ...chats]);
    setActiveChat(newChat.id);
  };

  const sendMessage = async (text) => {
    if (!activeChat) return;

    setLoading(true);

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              messages: [...chat.messages, { role: "user", text }]
            }
          : chat
      )
    );

    const aiResponse = await fetchGeminiResponse(text);

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              messages: [...chat.messages, { role: "assistant", text: aiResponse }]
            }
          : chat
      )
    );

    setLoading(false);
  };

  return {
    chats,
    activeChat,
    setActiveChat,
    createNewChat,
    sendMessage,
    loading
  };
};
