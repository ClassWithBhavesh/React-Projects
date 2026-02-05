import { useState } from "react";

const InputBox = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="p-4 border-t border-white/10 flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 bg-black border border-white/20 rounded-lg px-4 py-2 focus:outline-none"
        placeholder="Ask something..."
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all"
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
