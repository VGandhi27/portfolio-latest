import { useState } from "react";

export default function ChatWithMe() {
  const [messages, setMessages] = useState([
    { text: "Hey! Ask me anything about Vidushi Gandhi.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Fixed useState syntax

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:40/chatbot/search/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const botResponseText = data.results?.[0]?.text || "No relevant answer found.";

      const botResponse = { text: botResponseText.replace(/\n/g, "<br/>"), sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error connecting to AI.", sender: "bot" },
      ]);
    }

    setLoading(false);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Chat with Me</h2>

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto border border-gray-700 p-4 rounded-lg mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-lg max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto text-right"
                  : "bg-gray-700 text-left mr-auto"
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }} // ✅ Properly renders multi-line AI responses
            />
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 outline-none"
            placeholder="Ask me about Vidushi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
