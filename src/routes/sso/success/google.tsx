import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/sso/success/google")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthSuccess = async () => {
      try {
        // Better-auth handles the session automatically
        // Just verify the session was created successfully
        const session = await authClient.getSession();

        if (session?.data?.user) {
          // Session exists, redirect to main app
          navigate({ to: "/" });
        } else {
          // No session found, redirect to login
          navigate({ to: "/login" });
        }
      } catch (err) {
        console.error("Auth verification error:", err);
        setError(err);
        setIsLoading(false);
        // Redirect to login on error
        setTimeout(() => navigate({ to: "/login" }), 2000);
      }
    };

    handleAuthSuccess();
  }, [navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Completing sign in...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500">Authentication error occurred</p>
          <p className="mt-2">Redirecting to login...</p>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-green-500">Login successful!</p>
        <p className="mt-2">Redirecting...</p>
      </div>
    </div>
  );
}
