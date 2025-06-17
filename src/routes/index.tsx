import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { requireAuth } from "@/lib/auth-middleware";
import { LogoutButton } from "@/components/auth";

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
    <></>
  );
}
