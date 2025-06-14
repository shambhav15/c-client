import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@/lib/auth-middleware";
import { LogoutButton } from "@/components/LogoutButton";

export const Route = createFileRoute("/")({
  // beforeLoad: async () => {
  //   await requireAuth();
  // },
  component: Home,
});

function Home() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  console.log("Home component - Session:", session); // Debug log
  console.log("Home component - User:", user); // Debug log

  const handleGoogleLogin = async () => {
    try {
      const response = await signIn();
      console.log("res:", response);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Welcome to Chat App{user ? `, ${user.name}` : ""}
        </h1>
        <p className="text-muted-foreground">
          Select a contact from the sidebar to start chatting
        </p>

        {/* Debug info */}
        <div className="mt-4 p-4 bg-gray-100 rounded text-sm text-left">
          <h3 className="font-bold">Debug Info:</h3>
          <p>isPending: {isPending.toString()}</p>
          <p>session exists: {!!session ? "yes" : "no"}</p>
          <p>user exists: {!!user ? "yes" : "no"}</p>
          {user && <p>user name: {user.name}</p>}
          {user && <p>user email: {user.email}</p>}
        </div>

        {/* Show logout button if user is authenticated */}
        {user && (
          <div className="flex justify-center mt-6">
            <LogoutButton variant="outline" className="px-6 py-2" />
          </div>
        )}

        {!user && (
          <Button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm mt-4"
          >
            Sign in with Google
          </Button>
        )}
      </div>
    </div>
  );
}
