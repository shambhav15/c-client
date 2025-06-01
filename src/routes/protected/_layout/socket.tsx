import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/protected/_layout/socket")({
  component: RouteComponent,
});

function RouteComponent() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8080");

  //   ws.onopen = () => {
  //     console.log("connected to server");
  //     setSocket(ws);
  //   };

  //   ws.onmessage = (event) => {
  //     console.log(event.data);
  //     setMessage(event.data);
  //   };

  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  // if (!socket) {
  //   return (
  //     <div className="">
  //       <h1>Connecting...</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="flex w-full items-center flex-col gap-4 px-4 pt-0">
      {/* <h1>Connected</h1>`
      <ul>
        {message}
        <Button
          onClick={() => {
            socket?.send("hello");
          }}
        >
          Send
        </Button>
      </ul> */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 backdrop-blur-2xl bg-white/10 dark:bg-black/20  border-white/30 dark:border-white/10 shadow-xl rounded-xl">
            <DropdownMenuLabel className="text-black/80 dark:text-white/80">
              Appearance
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-black/10 dark:bg-white/10" />
            <DropdownMenuCheckboxItem className="highlight cursor-pointer">
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="highlight cursor-pointer">
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="highlight cursor-pointer">
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Status Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Activity Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="w-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        praesentium quis laborum molestias dignissimos aliquam. Vel expedita
        aperiam quasi nobis blanditiis soluta deleniti quas perspiciatis nostrum
        in incidunt, quis facere officia, similique labore harum.
      </p>
    </div>
  );
}
