const Message = ({ role, text }) => {
  return (
    <div
      className={`max-w-xl px-4 py-3 rounded-lg animate-fadeIn
        ${role === "user"
          ? "bg-white text-black self-end"
          : "bg-white/10 text-white self-start"}`}
    >
      {text}
    </div>
  );
};

export default Message;
