import { useState, useRef, useEffect } from "react";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, AIMessage, BaseMessage } from "@langchain/core/messages";
import { v4 as uuidv4 } from "uuid";
import { trimMessages } from "@langchain/core/messages";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

export const sanitizeMessage = (message: string) => {
  return message
    .trim()
    .replace(/^```json\n/, "")
    .replace(/```$/, "")
    .replace(/\\n/g, "<br/>")
    .replace(
      /\*\*(\d+\.)\s*([^:*]+):\*\*/g,
      '<strong class="block mt-2">$1 $2:</strong>'
    )
    .replace(/\*\*([^*]+?):\*\*/g, "<strong>$1:</strong>")
    .replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>")
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    .replace(
      /`([^`]+)`/g,
      "<code class='bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs'>$1</code>"
    )
    .replace(/\*\s*(.*?)(?:<br\/>|$)/g, '<li class="ml-4">$1</li>')
    .replace(
      /(<li.*?>.*?<\/li>)+/g,
      '<ul class="list-disc space-y-1 mt-2">$&</ul>'
    );
};

const ChatUi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const llm = new ChatGoogleGenerativeAI({
    apiKey,
    model: "gemini-2.5-flash-preview-04-17",
    temperature: 0,
    streaming: true,
    cache: true,
  });

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Create a message trimmer to prevent context overflow
  const messageTrimmer = trimMessages({
    maxTokens: 4000, // Adjust based on model's context window
    strategy: "last",
    includeSystem: true,
    tokenCounter: (text) => Math.ceil(text.length / 4), // Simple approximation of token counting
    allowPartial: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content: input,
      role: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    // Create placeholder for AI response
    const responseId = uuidv4();
    setMessages((prev) => [
      ...prev,
      {
        id: responseId,
        content: "",
        role: "assistant",
      },
    ]);

    setInput(""); // Clear input
    setIsStreaming(true);

    try {
      // Convert our UI messages to LangChain message format
      const langchainMessages: BaseMessage[] = messages.map((msg) =>
        msg.role === "user"
          ? new HumanMessage(msg.content)
          : new AIMessage(msg.content)
      );

      // Add the current input as a HumanMessage
      langchainMessages.push(new HumanMessage(input));

      // Trim messages to prevent context overflow
      const trimmedMessages = await messageTrimmer.invoke(langchainMessages);

      // Stream the response
      const stream = await llm.stream(trimmedMessages);

      // Process the stream
      let streamedContent = "";

      for await (const chunk of stream) {
        if (typeof chunk.content === "string") {
          streamedContent += chunk.content;
          // Update the content incrementally for streaming effect
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === responseId ? { ...msg, content: streamedContent } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);

      // Update error message to the placeholder message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === responseId
            ? {
                ...msg,
                content:
                  "Sorry, I encountered an error while processing your request.",
              }
            : msg
        )
      );
    } finally {
      setIsStreaming(false);
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
              {message.role === "assistant" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      sanitizeMessage(message.content) ||
                      (isStreaming
                        ? '<span class="animate-pulse">•••</span>'
                        : ""),
                  }}
                />
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
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
            disabled={isStreaming}
          />
          <button
            type="submit"
            className={`px-3 py-2 rounded-md bg-primary text-primary-foreground transition-colors text-sm ${
              isStreaming
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary/90"
            }`}
            disabled={isStreaming}
          >
            {isStreaming ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatUi;
