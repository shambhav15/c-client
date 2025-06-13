import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const handleGoogleLogin = async () => {
    try {
      const response = await signIn();
      console.log("res:", response);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Welcome to Chat App
        </h1>
        <p className="text-muted-foreground">
          Select a contact from the sidebar to start chatting
        </p>
        <Button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
