import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Welcome to Chat App
        </h1>
        <p className="text-muted-foreground">
          Select a contact from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
}
