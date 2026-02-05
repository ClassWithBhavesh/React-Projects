import Message from "./Message";
import InputBox from "./InputBox";

const ChatArea = ({ chat, sendMessage, loading }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {chat?.messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}

        {loading && (
          <div className="text-sm opacity-60 animate-pulse">
            Gemini is thinking...
          </div>
        )}
      </div>

      <InputBox sendMessage={sendMessage} />
    </div>
  );
};

export default ChatArea;
