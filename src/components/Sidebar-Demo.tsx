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
import { ChatUi } from "@/components/chat";
import { Button } from "./ui/button";
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

export const RadixSidebarDemo = () => {
  const isMobile = useIsMobile();
  const [activeChat, setActiveChat] = React.useState(DATA.chats[0]);
  const [selectedContact, setSelectedContact] = React.useState<
    (typeof DATA.contacts)[0] | null
  >(null);
  const { data: session } = useSession();
  const user = session?.user;

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
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          {/* Team Switcher */}
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <activeChat.logo className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {activeChat.name}
                      </span>
                      <span className="truncate text-xs">
                        {activeChat.status}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  align="start"
                  side={isMobile ? "bottom" : "right"}
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Chats
                  </DropdownMenuLabel>
                  {DATA.chats.map((chat, index) => (
                    <DropdownMenuItem
                      key={chat.name}
                      onClick={() => setActiveChat(chat)}
                      className="gap-2 p-2"
                    >
                      <div className="flex size-6 items-center justify-center rounded-sm border">
                        <chat.logo className="size-4 shrink-0" />
                      </div>
                      {chat.name}
                      <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 p-2">
                    <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                      <Plus className="size-4" />
                    </div>
                    <div className="font-medium text-muted-foreground">
                      Add chat
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          {/* Team Switcher */}
        </SidebarHeader>

        <SidebarContent>
          {isGeneralChat ? (
            /* Contacts List for General Chat */
            <SidebarGroup>
              <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
                Direct Messages
              </SidebarGroupLabel>
              <SidebarMenu className="group-data-[collapsible=icon]:space-y-2">
                {DATA.contacts.map((contact) => (
                  <SidebarMenuItem key={contact.name}>
                    <SidebarMenuButton
                      className="h-12 justify-start gap-3 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0"
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="relative">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={contact.avatar}
                            alt={contact.name}
                          />
                          <AvatarFallback>
                            {contact.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        {/* Status indicator */}
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(contact.status)}`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                        <div className="flex items-center gap-2">
                          <span className="truncate font-medium text-sm">
                            {contact.name}
                          </span>
                          {contact.badge && (
                            <span className="px-1.5 py-0.5 text-xs bg-blue-600 text-white rounded text-[10px] font-bold">
                              {contact.badge}
                            </span>
                          )}
                          {contact.isBot && (
                            <span className="px-1.5 py-0.5 text-xs bg-indigo-600 text-white rounded text-[10px] font-bold">
                              BOT
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {contact.lastSeen}
                        </p>
                      </div>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction
                          showOnHover
                          className="group-data-[collapsible=icon]:hidden"
                        >
                          <MoreHorizontal />
                          <span className="sr-only">More</span>
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-48 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align={isMobile ? "end" : "start"}
                      >
                        <DropdownMenuItem>
                          <span>Send Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>View Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <span>Mute</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <span>Block</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ) : (
            /* Original Navigation for other chats */
            <>
              {/* Nav Main */}
              <SidebarGroup>
                <SidebarGroupLabel>Platform</SidebarGroupLabel>
                <SidebarMenu>
                  {DATA.navMain.map((item) => (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen={item.isActive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
              {/* Nav Main */}

              {/* Nav Contacts */}
              <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                <SidebarGroupLabel>Contacts</SidebarGroupLabel>
                <SidebarMenu>
                  {DATA.contacts.slice(0, 3).map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <a href="#">
                          <Avatar className="h-4 w-4">
                            <AvatarImage src={item.avatar} alt={item.name} />
                            <AvatarFallback>
                              {item.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction showOnHover>
                            <MoreHorizontal />
                            <span className="sr-only">More</span>
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-48 rounded-lg"
                          side={isMobile ? "bottom" : "right"}
                          align={isMobile ? "end" : "start"}
                        >
                          <DropdownMenuItem>
                            <Folder className="text-muted-foreground" />
                            <span>View Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Forward className="text-muted-foreground" />
                            <span>Send Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Trash2 className="text-muted-foreground" />
                            <span>Remove Contact</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-sidebar-foreground/70">
                      <MoreHorizontal className="text-sidebar-foreground/70" />
                      <span>More</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
              {/* Nav Contacts */}
            </>
          )}
        </SidebarContent>
        <SidebarFooter>
          {/* Nav User */}
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={user?.image || DATA.user.avatar}
                        alt={user?.name || DATA.user.name}
                      />
                      <AvatarFallback className="rounded-lg">
                        {user?.name?.charAt(0)?.toUpperCase() || "CN"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user?.name || DATA.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {user?.email || DATA.user.email}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={user?.image || DATA.user.avatar}
                          alt={user?.name || DATA.user.name}
                        />
                        <AvatarFallback className="rounded-lg">
                          {user?.name?.charAt(0)?.toUpperCase() || "CN"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user?.name || DATA.user.name}
                        </span>
                        <span className="truncate text-xs">
                          {user?.email || DATA.user.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Sparkles />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <LogoutButton
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto font-normal cursor-pointer"
                      showIcon={true}
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          {/* Nav User */}
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Chat App</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{activeChat.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex-1 p-4">
          {selectedContact ? (
            <div className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border bg-background/50 rounded-t-lg">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={selectedContact.avatar}
                      alt={selectedContact.name}
                    />
                    <AvatarFallback>
                      {selectedContact.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(selectedContact.status)}`}
                  ></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-lg">
                      {selectedContact.name}
                    </h2>
                    {selectedContact.badge && (
                      <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded font-bold">
                        {selectedContact.badge}
                      </span>
                    )}
                    {selectedContact.isBot && (
                      <span className="px-2 py-1 text-xs bg-indigo-600 text-white rounded font-bold">
                        BOT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedContact.lastSeen}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedContact(null)}
                >
                  ✕
                </Button>
              </div>

              {/* Chat Content */}
              <div className="flex-1 overflow-hidden">
                <ChatUi contact={selectedContact} />
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <h3 className="text-lg font-semibold mb-2">
                Welcome to {activeChat.name}
              </h3>
              <p>Select a contact to start chatting!</p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
