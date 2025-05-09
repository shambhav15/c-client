import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

const ChatUi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const ai = new GoogleGenAI({ apiKey });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: input,
      role: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear input

    try {
      // Using the models API as per the documentation
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: input,
      });

      // Get the response text safely
      const responseText = result.text || "I couldn't generate a response";

      const aiMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: responseText,
        role: "assistant",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);

      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: "Sorry, I encountered an error while processing your request.",
        role: "assistant",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="bg-muted/50 w-[400px] h-[500px] rounded-lg flex flex-col shadow-lg border border-border">
      {/* Chat Header */}
      <div className="p-3 border-b border-border">
        <h3 className="font-medium">Chat Window</h3>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-2 text-sm ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 text-sm rounded-md p-2 bg-background border border-input"
          />
          <button
            type="submit"
            className="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatUi;
