"use client";
import { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatWithMe() {
  const [messages, setMessages] = useState([
    { text: "Hey! Ask me anything about Vidushi Gandhi.", sender: "bot", time: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user", time: new Date() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      const history = messages
        .filter((msg) => msg.sender !== "system")
        .slice(-3)
        .map(({ sender, text }) => ({
          role: sender === "user" ? "user" : "assistant",
          content: text,
        }));

      const response = await fetch("https://chatbotserver.eastus2.cloudapp.azure.com/chatbot/search/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input, history }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const botResponseText = data.generated_answer || "No relevant answer found.";
      const botResponse = {
        text: botResponseText.replace(/\n/g, "<br/>"),
        sender: "bot",
        time: new Date(),
        sources: data.source_texts || [],
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error connecting to AI.", sender: "bot", time: new Date() },
      ]);
    }

    setLoading(false);
    setInput("");
  };

  // Format timestamp
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Feedback submission (stub)
  const handleFeedback = async (text, feedback) => {
    console.log("Feedback:", feedback, "on:", text);
    // You can send this to your backend if needed
    // await fetch('/feedback', { method: 'POST', body: JSON.stringify({ text, feedback }) })
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-white bg-gradient-to-b from-purple-900 to-black" style={{ marginTop: "3rem" }}>
      <div className="w-full max-w-4xl bg-purple-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">💬 Chat with Me</h2>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto border border-gray-700 p-4 rounded-xl bg-purple-900">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-xl max-w-[75%] text-sm shadow-lg ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white ml-auto text-right"
                  : "bg-gray-700 text-left mr-auto"
              }`}
            >
              <p dangerouslySetInnerHTML={{ __html: msg.text }} />
              <p className="text-xs text-gray-400 mt-1">{formatTime(msg.time)}</p>

              {/* Sources (for bot messages only) */}
              {msg.sender === "bot" && msg.sources && msg.sources.length > 0 && (
                <details className="mt-2 text-xs text-gray-300">
                  <summary className="cursor-pointer hover:underline">📄 View Sources</summary>
                  <ul className="mt-1 list-disc ml-4">
                    {msg.sources.map((src, i) => (
                      <li key={i}>
                        <span className="font-semibold">{src.source}:</span>{" "}
                        {src.text.slice(0, 100)}...
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              {/* Feedback Buttons */}
              {msg.sender === "bot" && (
                <div className="mt-2 flex gap-3 text-white/70 text-sm">
                  <button
                    onClick={() => handleFeedback(msg.text, "up")}
                    className="hover:text-white transition"
                  >
                    👍
                  </button>
                  <button
                    onClick={() => handleFeedback(msg.text, "down")}
                    className="hover:text-white transition"
                  >
                    👎
                  </button>
                </div>
              )}
            </div>
          ))}
          {loading && <div className="text-gray-400 italic mt-2">Typing...</div>}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Box */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            className="flex-1 p-3 rounded-xl bg-gray-800 border border-gray-600 outline-none text-white focus:ring-2 focus:ring-blue-500"
            placeholder="Ask me about Vidushi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className={`bg-blue-500 p-3 rounded-xl hover:bg-blue-600 transition flex items-center justify-center ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
            ) : (
              <FaPaperPlane className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
