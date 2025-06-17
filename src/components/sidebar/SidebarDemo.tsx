"use client";

import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
} from "@/components/animate-ui/radix/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import ChatUi from "@/components/chat/ChatUi";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { LogoutButton } from "@/components/auth";

const DATA = {
  user: {
    name: "You",
    email: "you@example.com",
    avatar: "/api/placeholder/400/400",
  },
  chats: [
    {
      name: "General Chat",
      logo: GalleryVerticalEnd,
      status: "Online",
    },
    {
      name: "AI Assistant",
      logo: Bot,
      status: "Active",
    },
    {
      name: "Support",
      logo: Command,
      status: "Available",
    },
  ],
  navMain: [
    {
      title: "Chat",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Recent",
          url: "#",
        },
        {
          title: "Favorites",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "AI Assistant",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "General Chat",
          url: "#",
        },
        {
          title: "Code Helper",
          url: "#",
        },
        {
          title: "Writing",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Privacy",
          url: "#",
        },
        {
          title: "Appearance",
          url: "#",
        },
      ],
    },
  ],
  contacts: [
    {
      name: "InternalPyre",
      avatar: "/assets/profiles/profile1.png",
      status: "online",
      lastSeen: "Just now",
    },
    {
      name: "Discord Official",
      avatar: "/assets/profiles/profile2.png",
      status: "online",
      lastSeen: "2 min ago",
      badge: "OFFICIAL",
    },
    {
      name: "Aradhana",
      avatar: "/assets/profiles/profile3.png",
      status: "away",
      lastSeen: "5 min ago",
    },
    {
      name: "Dyno",
      avatar: "/assets/profiles/profile4.png",
      status: "online",
      lastSeen: "Playing dyno.gg | ?help",
      isBot: true,
    },
    {
      name: "MEE6",
      avatar: "/assets/profiles/profile5.png",
      status: "online",
      lastSeen: "Playing 🎮 /mee6-games 🎮",
      isBot: true,
    },
    {
      name: "Carl-bot",
      avatar: "/assets/profiles/profile1.png",
      status: "online",
      lastSeen: "Active",
      isBot: true,
    },
    {
      name: "Unis",
      avatar: "/assets/profiles/profile2.png",
      status: "offline",
      lastSeen: "Last seen 2 hours ago",
    },
    {
      name: "Captcha.bot",
      avatar: "/assets/profiles/profile3.png",
      status: "online",
      lastSeen: "Active",
      isBot: true,
    },
    {
      name: "TT Boss",
      avatar: "/assets/profiles/profile4.png",
      status: "dnd",
      lastSeen: "Do not disturb",
    },
    {
      name: "hyper_dilip",
      avatar: "/assets/profiles/profile5.png",
      status: "online",
      lastSeen: "Just now",
    },
  ],
};

export const SidebarDemo = () => {
  const isMobile = useIsMobile();
  const [activeChat, setActiveChat] = React.useState(DATA.chats[0]);
  const [selectedContact, setSelectedContact] = React.useState<
    (typeof DATA.contacts)[0] | null
  >(null);
  const { data: session } = useSession();
  const user = session?.user;

  // Add keyboard escape functionality
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedContact) {
        setSelectedContact(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedContact]);

  if (!activeChat) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "dnd":
        return "bg-red-500";
      case "offline":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const isGeneralChat = activeChat.name === "General Chat";

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 bg-muted/30 border-r border-border flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <activeChat.logo className="size-4" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-sm">{activeChat.name}</h2>
              <p className="text-xs text-muted-foreground">
                {activeChat.status}
              </p>
            </div>
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Direct Messages
            </h3>
            {DATA.contacts.map((contact) => (
              <button
                key={contact.name}
                onClick={() => setSelectedContact(contact)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-muted/50 ${
                  selectedContact?.name === contact.name ? "bg-muted" : ""
                }`}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>
                      {contact.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(contact.status)}`}
                  ></div>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-medium text-sm">
                      {contact.name}
                    </span>
                    {contact.badge && (
                      <span className="px-2 py-0.5 text-xs bg-blue-600 text-white rounded font-bold">
                        {contact.badge}
                      </span>
                    )}
                    {contact.isBot && (
                      <span className="px-2 py-0.5 text-xs bg-indigo-600 text-white rounded font-bold">
                        BOT
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    {contact.lastSeen}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.image || DATA.user.avatar}
                alt={user?.name || DATA.user.name}
              />
              <AvatarFallback>
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {user?.name || DATA.user.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user?.email || DATA.user.email}
              </p>
            </div>
            <LogoutButton variant="ghost" size="sm" showIcon={false} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-6 border-b border-border/50 bg-gradient-to-r from-background to-background/80 backdrop-blur-sm">
              <div className="relative">
                <Avatar className="h-12 w-12 ring-2 ring-blue-500/20">
                  <AvatarImage
                    src={selectedContact.avatar}
                    alt={selectedContact.name}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    {selectedContact.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-3 border-background ${getStatusColor(selectedContact.status)} shadow-lg`}
                ></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    {selectedContact.name}
                  </h2>
                  {selectedContact.badge && (
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold shadow-md">
                      {selectedContact.badge}
                    </span>
                  )}
                  {selectedContact.isBot && (
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold shadow-md">
                      BOT
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedContact.status === "online"
                    ? "Active now"
                    : selectedContact.lastSeen}
                </p>
              </div>
              <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                Press ESC to close
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 min-h-0">
              <ChatUi contact={selectedContact} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">💬</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Welcome to {activeChat.name}
              </h3>
              <p className="text-muted-foreground max-w-md">
                Select a contact from the sidebar to start a conversation. Your
                messages will appear here with a beautiful, modern interface.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
