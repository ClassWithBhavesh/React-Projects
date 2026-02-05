const Sidebar = ({ chats, activeChat, setActiveChat, createNewChat }) => {
  return (
    <aside className="w-72 bg-black border-r border-white/10 p-4">
      <button
        onClick={createNewChat}
        className="w-full mb-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all"
      >
        + New Chat
      </button>

      <div className="space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat.id)}
            className={`p-3 rounded-lg cursor-pointer transition-all
              ${activeChat === chat.id
                ? "bg-white text-black"
                : "hover:bg-white/10"}`}
          >
            {chat.title}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
