import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Smile } from "lucide-react";

type Message = {
  id: string;
  content: string;
  role: "user" | "contact";
  timestamp: Date;
};

type Contact = {
  name: string;
  avatar: string;
  status: string;
  lastSeen: string;
  badge?: string;
  isBot?: boolean;
};

interface ChatUiProps {
  contact: Contact;
}

const ChatUi = ({ contact }: ChatUiProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mock messages for different contacts
  useEffect(() => {
    const mockMessages: Record<string, Message[]> = {
      InternalPyre: [
        {
          id: "1",
          content: "Hey there! How's it going?",
          role: "contact",
          timestamp: new Date(Date.now() - 3600000),
        },
        {
          id: "2",
          content: "Pretty good! Just working on some new features",
          role: "user",
          timestamp: new Date(Date.now() - 3500000),
        },
        {
          id: "3",
          content: "Nice! What kind of features?",
          role: "contact",
          timestamp: new Date(Date.now() - 3400000),
        },
      ],
      "Discord Official": [
        {
          id: "1",
          content: "Welcome to Discord! We're excited to have you here.",
          role: "contact",
          timestamp: new Date(Date.now() - 7200000),
        },
        {
          id: "2",
          content: "Thanks! Love the platform",
          role: "user",
          timestamp: new Date(Date.now() - 7100000),
        },
        {
          id: "3",
          content:
            "We're constantly working to improve your experience. Let us know if you have any feedback!",
          role: "contact",
          timestamp: new Date(Date.now() - 7000000),
        },
      ],
      Aradhana: [
        {
          id: "1",
          content: "Are you joining the meeting today?",
          role: "contact",
          timestamp: new Date(Date.now() - 1800000),
        },
        {
          id: "2",
          content: "Yes, I'll be there in 10 minutes",
          role: "user",
          timestamp: new Date(Date.now() - 1700000),
        },
        {
          id: "3",
          content: "Perfect! See you then",
          role: "contact",
          timestamp: new Date(Date.now() - 1600000),
        },
      ],
      Dyno: [
        {
          id: "1",
          content:
            "🤖 Hello! I'm Dyno, your friendly server bot. Type !help to see what I can do!",
          role: "contact",
          timestamp: new Date(Date.now() - 86400000),
        },
      ],
      MEE6: [
        {
          id: "1",
          content:
            "🎮 Welcome! I'm MEE6. I can help manage your server and provide fun games!",
          role: "contact",
          timestamp: new Date(Date.now() - 86400000),
        },
        {
          id: "2",
          content: "What games do you have?",
          role: "user",
          timestamp: new Date(Date.now() - 86300000),
        },
        {
          id: "3",
          content:
            "I have trivia, slots, blackjack and more! Type /mee6-games to play 🎲",
          role: "contact",
          timestamp: new Date(Date.now() - 86200000),
        },
      ],
    };

    setMessages(mockMessages[contact.name] || []);
  }, [contact.name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate contact response (for demo purposes)
    setTimeout(
      () => {
        const responses = [
          "That's interesting!",
          "I see what you mean",
          "Thanks for sharing that",
          "Got it!",
          "Absolutely!",
          "I agree with you",
          "That makes sense",
        ];

        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];

        const contactMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          role: "contact",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, contactMessage]);
      },
      1000 + Math.random() * 2000
    ); // Random delay between 1-3 seconds
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const formatDateSeparator = (date: Date) => {
    if (isToday(date)) return "Today";
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return date.toLocaleDateString([], {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  // Group messages by date
  const groupedMessages = messages.reduce(
    (groups: { [key: string]: Message[] }, message) => {
      const dateKey = message.timestamp.toDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(message);
      return groups;
    },
    {}
  );

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Messages Area - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 min-h-0">
        {Object.keys(groupedMessages).length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <Smile className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-lg font-medium text-muted-foreground mb-2">
                  No messages yet
                </p>
                <p className="text-sm text-muted-foreground">
                  Start the conversation with {contact.name}!
                </p>
              </div>
            </div>
          </div>
        ) : (
          Object.entries(groupedMessages).map(([dateKey, dayMessages]) => (
            <div key={dateKey} className="space-y-4">
              {/* Date separator */}
              <div className="flex items-center justify-center py-2">
                <div className="bg-muted/80 backdrop-blur-sm px-4 py-1 rounded-full">
                  <span className="text-xs font-medium text-muted-foreground">
                    {formatDateSeparator(new Date(dateKey))}
                  </span>
                </div>
              </div>

              {/* Messages for this date */}
              {dayMessages.map((message, index) => {
                const isLastInGroup =
                  index === dayMessages.length - 1 ||
                  dayMessages[index + 1]?.role !== message.role;
                const isFirstInGroup =
                  index === 0 || dayMessages[index - 1]?.role !== message.role;

                return (
                  <div
                    key={message.id}
                    className={`flex items-end gap-3 ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {message.role === "contact" && (
                      <Avatar
                        className={`h-8 w-8 flex-shrink-0 transition-all duration-200 ${
                          isLastInGroup ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-semibold">
                          {contact.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={`flex flex-col max-w-[75%] ${
                        message.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 text-sm leading-relaxed transition-all duration-200 hover:scale-[1.02] ${
                          message.role === "user"
                            ? `bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 ${
                                isFirstInGroup
                                  ? "rounded-t-3xl"
                                  : "rounded-t-md"
                              } ${
                                isLastInGroup
                                  ? "rounded-bl-3xl rounded-br-md"
                                  : "rounded-b-md"
                              }`
                            : `bg-muted/80 backdrop-blur-sm text-foreground border border-border/50 shadow-sm ${
                                isFirstInGroup
                                  ? "rounded-t-3xl"
                                  : "rounded-t-md"
                              } ${
                                isLastInGroup
                                  ? "rounded-br-3xl rounded-bl-md"
                                  : "rounded-b-md"
                              }`
                        }`}
                      >
                        {message.content}
                      </div>

                      {/* Show timestamp only for the last message in group */}
                      {isLastInGroup && (
                        <span className="text-xs text-muted-foreground mt-1 px-1 opacity-70">
                          {formatTime(message.timestamp)}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area at Bottom */}
      <div className="flex-shrink-0 bg-background/95 backdrop-blur-lg border-t border-border/50 p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message ${contact.name}...`}
                className="w-full text-sm rounded-3xl px-6 py-4 bg-muted/80 backdrop-blur-sm border border-border/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-200 placeholder:text-muted-foreground/70"
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim()}
              className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 disabled:hover:scale-100"
            >
              <Send className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatUi;
