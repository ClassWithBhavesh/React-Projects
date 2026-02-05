import Sidebar from "./Components/Sidebar";
import ChatArea from "./Components/ChatArea";
import { useChat } from "./CustomHooks/useChat";

function App() {
  const {
    chats,
    activeChat,
    setActiveChat,
    createNewChat,
    sendMessage,
    loading
  } = useChat();

  const activeChatData = chats.find(c => c.id === activeChat);

  return (
    <div className="flex h-screen">
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        createNewChat={createNewChat}
      />

      <main className="flex-1 bg-black">
        {activeChatData ? (
          <ChatArea
            chat={activeChatData}
            sendMessage={sendMessage}
            loading={loading}
          />
        ) : (
          <div className="h-full flex items-center justify-center opacity-50">
            Start a new chat ✨
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
